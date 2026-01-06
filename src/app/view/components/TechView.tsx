import type { TechModel } from "../../model/siteModel";
import SectionTitleView from "./SectionTitleView";

type Props = {
  tech: TechModel;
};

export default function TechView({ tech }: Props) {
  return (
    <section id="stack" className="section fade-in">

      <SectionTitleView title={tech.title} subtitle={tech.hint} />

      {/* Placeholder for 3D cube UI. We render faces as cards for now. */}
      <div className="grid">
        {tech.faces.map((face) => (
          <article key={face.title} className="card">
            <div className="card-head">
              <h3>{face.title}</h3>
              <span className="badge">{face.badge}</span>
            </div>

            <ul>
              {face.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
