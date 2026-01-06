import type { TechModel } from "../../model/siteModel";
import SectionTitleView from "./SectionTitleView";
import CardView from "./CardView";

type Props = {
  tech: TechModel;
};

export default function TechView({ tech }: Props) {
  return (
    <section className="section fade-in">
      <SectionTitleView id="stack" title={tech.title} subtitle={tech.hint} />

      <div className="grid">
        {tech.faces.map((face) => (
          <CardView
            key={face.title}
            title={face.title}
            badge={face.badge}
          >
            <ul>
              {face.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </CardView>
        ))}
      </div>
    </section>
  );
}
