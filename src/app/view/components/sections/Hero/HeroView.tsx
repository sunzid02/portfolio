import type { HeroModel } from "../../../../model/siteModel";
 import heroPhoto from "../../../../../assets/travel/germany.jpg";

import Icon from "../../ui/Icon/Icon";


type Props = { hero: HeroModel };

export default function HeroView({ hero }: Props) {
  return (
    <section className="hero fade-in">
      <div className="hero-grid">
        <div className="hero-media" aria-hidden="true">
          {/* put your Germany photo in src/assets and import it properly */}
          {/* <img className="hero-photo" src="src/assets/hero/germany.jpg" alt="" /> */}

          <img className="hero-photo" src={heroPhoto} alt="" />

          <div className="hero-caption">Borussia-Park, Mönchengladbach, Germany 🇩🇪</div>
        </div>

        <div className="hero-content">
          <div className="hero-kicker">Building reliable systems with calm execution</div>

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
          <a className="hero-icon-btn is-email" href={`mailto:${hero.cta.email}`} aria-label="Email">
            <Icon name="email" />
          </a>


          <div className="hero-links">
            {hero.cta.links.map((l) => (
              <a
                key={l.url}
                className={`hero-icon-btn is-${l.icon}`}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                aria-label={l.label}
                title={l.label}
              >
                <Icon name={l.icon as any} />
              </a>
            ))}
          </div>
        </div>


          <p className="note">{hero.note}</p>
        </div>
      </div>
    </section>
  );
}
