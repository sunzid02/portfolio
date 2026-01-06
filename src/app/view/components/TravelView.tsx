import type { TravelModel } from "../../model/siteModel";
import SectionTitleView from "./SectionTitleView";
import CardView from "./CardView";
import TravelSliderView from "./TravelSliderView";


type Props = {
  travel: TravelModel;
};

export default function TravelView({ travel }: Props) {
  return (
<section id="travel" className="section fade-in">
  <SectionTitleView title={travel.title} subtitle={travel.intro} />

      {/* country flags */}
      <div className="flags" aria-label="Countries">
        {travel.flags.map((f) => (
          <span key={f.name} className="flag" title={f.name}>
            {f.emoji} {f.name}
          </span>
        ))}
      </div>

      {/* quote */}
      <figure className="quote">
        <blockquote>{travel.quote.text}</blockquote>
        <figcaption>{travel.quote.author}</figcaption>
      </figure>

      <SectionTitleView
        title={travel.photos.title}
        subtitle={travel.photos.intro}
      />

      <p className="hint">{travel.photos.hint}</p>

      <TravelSliderView items={travel.photos.items} />

    </section>
  );
}
