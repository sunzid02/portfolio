import type { TravelModel } from "../../model/siteModel";
import SectionTitleView from "./SectionTitleView";

type Props = {
  travel: TravelModel;
};

export default function TravelView({ travel }: Props) {
  return (
    <section id="travel" className="section fade-in">
      <SectionTitleView
          id="travel"
          title={travel.title}
          subtitle={travel.intro}
        />

      <div className="flags" aria-label="Countries">
        {travel.flags.map((f) => (
          <span key={f.name} className="flag" title={f.name}>
            {f.emoji} {f.name}
          </span>
        ))}
      </div>

      <figure className="quote">
        <blockquote>{travel.quote.text}</blockquote>
        <figcaption>{travel.quote.author}</figcaption>
      </figure>

      <h3>{travel.photos.title}</h3>
      <p>{travel.photos.intro}</p>
      <div className="hint">{travel.photos.hint}</div>

      {/* Placeholder gallery. Later we will add slider controls. */}
      <div className="grid">
        {travel.photos.items.map((ph) => (
          <article key={ph.src} className="card">
            <div className="media">
              {/* If you keep images in public/assets, update src accordingly later */}
              <img src={ph.src} alt={ph.title} loading="lazy" />
            </div>
            <h4>{ph.title}</h4>
            <p>{ph.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
