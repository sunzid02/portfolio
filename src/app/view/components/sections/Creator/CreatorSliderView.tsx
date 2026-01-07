import { useMemo, useState } from "react";
import type { CreatorVideo } from "../../../../model/siteModel";
import SliderShell from "../../ui/Slider/SliderShell";
import { toYouTubeEmbedUrl } from "../../../utils/youtube";

type Props = {
  items: CreatorVideo[];
};

export default function CreatorSliderView({ items }: Props) {
  const safeItems = useMemo(() => items ?? [], [items]);
  const total = safeItems.length;

  const [index, setIndex] = useState(0);
  const [loadedIds, setLoadedIds] = useState<Record<string, true>>({});

  const current = total > 0 ? safeItems[index] : null;

  const goPrev = () => {
    if (total === 0) return;
    setIndex((i) => (i - 1 + total) % total);
  };

  const goNext = () => {
    if (total === 0) return;
    setIndex((i) => (i + 1) % total);
  };

  const goTo = (i: number) => {
    if (i < 0 || i >= total) return;
    setIndex(i);
  };

  const markLoaded = (id: string) => {
    setLoadedIds((prev) => (prev[id] ? prev : { ...prev, [id]: true }));
  };

  if (!current) return <p className="hint">No videos yet.</p>;

  const controls = (
    <div className="creator-controls">
      <button className="creator-btn" type="button" onClick={goPrev} aria-label="Previous video">
        ←
      </button>
      <button className="creator-btn" type="button" onClick={goNext} aria-label="Next video">
        →
      </button>
    </div>
  );

  const dots = (
    <>
      {safeItems.map((v, i) => (
        <button
          key={v.id}
          type="button"
          className={`creator-dot ${i === index ? "is-active" : ""}`}
          onClick={() => goTo(i)}
          aria-label={`Go to video ${i + 1}`}
        />
      ))}
    </>
  );

  const isLoaded = !!loadedIds[current.id];

  return (
    <SliderShell
      right={controls}
      dots={dots}
      title={total > 1 ? `${index + 1} / ${total}` : undefined}
    >
      <div className="creator-slide">
        <div className="creator-media">
          {!isLoaded ? (
            <button
              className="creator-cover"
              type="button"
              onClick={() => markLoaded(current.id)}
              aria-label={`Load video: ${current.title}`}
            >
              <span className="creator-play" aria-hidden="true">
                ▶
              </span>
              <span className="creator-cover-text">Load video</span>
            </button>
          ) : (
            <iframe
              className="creator-iframe"
              src={toYouTubeEmbedUrl(current.url, current.id)}
              title={current.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
        </div>

        <div className="creator-meta">
          <h3 className="creator-title">{current.title}</h3>
          <p className="creator-desc">{current.desc}</p>

          <a className="creator-open" href={current.url} target="_blank" rel="noreferrer">
            Open on YouTube
          </a>
        </div>
      </div>
    </SliderShell>
  );
}
