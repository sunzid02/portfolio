import type { ExperienceModel } from "../../model/siteModel";
import SectionTitleView from "./SectionTitleView";

type Props = {
  experience: ExperienceModel;
};

export default function ExperienceView({ experience }: Props) {
  return (
    <section id="experience" className="section fade-in">
      <SectionTitleView
          id="experience"
          title={experience.title}
        />
        
      <div className="stack">
        {experience.items.map((item) => (
          <article key={`${item.title}-${item.when}`} className="card">
            <h3>{item.title}</h3>
            <p className="muted">{item.when}</p>

            <ul>
              {item.bullets.map((b, idx) => (
                <li key={`${item.title}-${idx}`}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
