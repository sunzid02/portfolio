import type { TravelModel } from "../../model/siteModel";
import SectionTitleView from "./SectionTitleView";
import CardView from "./CardView";

type Props = {
  travel: TravelModel;
};

export default function TravelView({ travel }: Props) {
  return (
    <section className="section fade-in">
      <SectionTitleView
        id="travel"
        title={travel.title}
        subtitle={travel.intro}
      />

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

      <div className="grid">
        {travel.photos.items.map((ph) => (
          <CardView
            key={ph.src}
            title={ph.title}
            subtitle={ph.desc}
          >
            <div className="media">
              <img
                src={ph.src}
                alt={ph.title}
                loading="lazy"
              />
            </div>
          </CardView>
        ))}
      </div>
    </section>
  );
}
