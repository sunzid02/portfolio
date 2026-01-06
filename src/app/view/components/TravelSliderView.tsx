import { useMemo, useState } from "react";
import type { TravelPhoto } from "../../model/siteModel";
import CardView from "./CardView";

type Props = {
  items: TravelPhoto[];
};

export default function TravelSliderView({ items }: Props) {
  const safeItems = useMemo(() => items ?? [], [items]);
  const [index, setIndex] = useState(0);

  const total = safeItems.length;
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

  if (!current) {
    return <p className="hint">No travel photos yet.</p>;
  }

  return (
    <div className="slider">
      <div className="slider-top">
        <div className="slider-controls">
          <button className="icon-btn" type="button" onClick={goPrev} aria-label="Previous">
            ←
          </button>
          <button className="icon-btn" type="button" onClick={goNext} aria-label="Next">
            →
          </button>
        </div>
      </div>

      <CardView title={current.title} subtitle={current.desc}>
        <div className="media">
          <img src={current.src} alt={current.title} loading="lazy" />
        </div>
      </CardView>

      <div className="slider-dots" aria-label="Slide dots">
        {safeItems.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "is-active" : ""}`}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
