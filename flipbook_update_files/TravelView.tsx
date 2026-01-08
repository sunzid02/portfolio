import type { TravelModel } from "../../../../model/siteModel";
import SectionTitleView from "../../ui/SectionTitle/SectionTitleView";
import FlipBookView from "../../ui/FlipBook/FlipBookView";

type Props = {
  travel: TravelModel;
};

export default function TravelView({ travel }: Props) {
  const introPage = (
    <div>
      <SectionTitleView title={travel.title} subtitle={travel.intro} />

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

      <SectionTitleView title={travel.photos.title} subtitle={travel.photos.intro} />
      <p className="hint">{travel.photos.hint}</p>
    </div>
  );

  const photoPages = travel.photos.items.map((p) => (
    <div key={p.title} className="travel-slide">
      <div className="travel-media">
        <img src={p.src} alt={p.title} loading="lazy" />
        <div className="travel-overlay" />
        <div className="travel-overlay-title">{p.title}</div>
      </div>

      <div className="travel-meta">
        <p className="travel-desc">{p.desc}</p>
      </div>
    </div>
  ));

  return (
    <section id="travel" className="section fade-in">
      <FlipBookView id="travel-flipbook" title="Travel" pages={[introPage, ...photoPages]} />
    </section>
  );
}
