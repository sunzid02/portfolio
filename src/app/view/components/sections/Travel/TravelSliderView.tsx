import { useMemo, useState } from "react";
import type { TravelPhoto } from "../../../../model/siteModel";

import SliderShell from "../../ui/Slider/SliderShell";
import { useSliderControls } from "../../../hooks/useSliderControls"; 

type Props = {
  items: TravelPhoto[];
};

export default function TravelSliderView({ items }: Props) {
  const safeItems = useMemo(() => items ?? [], [items]);
  const total = safeItems.length;

  const [index, setIndex] = useState(0);
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

  if (!current) return <p className="hint">No travel photos yet.</p>;

  const controls = (
    <div className="travel-controls">
      <button className="travel-btn" type="button" onClick={goPrev} aria-label="Previous photo">
        ←
      </button>
      <button className="travel-btn" type="button" onClick={goNext} aria-label="Next photo">
        →
      </button>
    </div>
  );


  const sliderRef = useSliderControls({
    onPrev: goPrev,
    onNext: goNext,
  });



  const dots = (
    <>
      {safeItems.map((_, i) => (
        <button
          key={i}
          type="button"
          className={`travel-dot ${i === index ? "is-active" : ""}`}
          onClick={() => goTo(i)}
          aria-label={`Go to photo ${i + 1}`}
        />
      ))}
    </>
  );

  return (
    
    <div
        ref={sliderRef}
        tabIndex={0}
        className="slider-focus"
        aria-label="Travel slider. Use left and right arrows."
      >
        <SliderShell right={controls} dots={dots}>
            <div className="travel-slide">
              <div className="travel-media">
                <img src={current.src} alt={current.title} loading="lazy" />
                <div className="travel-overlay" />
                <div className="travel-overlay-title">{current.title}</div>

                {controls}
              </div>

              <div className="travel-meta">
                <p className="travel-desc">{current.desc}</p>
              </div>
            </div>
        </SliderShell>
      </div>
  );
}