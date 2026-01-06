import type { HeroModel } from "../../model/siteModel";

type Props = {
  hero: HeroModel;
};

export default function HeroView({ hero }: Props) {
  return (
    <section className="hero fade-in">
      <h1>{hero.headline}</h1>
      <p className="sub">{hero.subline}</p>

      <div className="pill-row" role="list" aria-label="Highlights">
        {hero.pills.map((text, idx) => (
          <div key={`${text}-${idx}`} className="pill" role="listitem">
            {text}
          </div>
        ))}
      </div>

      <div className="hero-cta">
        <a className="btn" href={`mailto:${hero.cta.email}`}>
          Email
        </a>

        <div className="hero-links">
          {hero.cta.links.map((l) => (
            <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <p className="note">{hero.note}</p>
    </section>
  );
}
