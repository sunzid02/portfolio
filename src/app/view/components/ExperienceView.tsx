import type { ExperienceModel } from "../../model/siteModel";
import SectionTitleView from "./SectionTitleView";
import CardView from "./CardView";

type Props = {
  experience: ExperienceModel;
};

export default function ExperienceView({ experience }: Props) {
  return (
    <section className="section fade-in">
      <SectionTitleView id="experience" title={experience.title} />

      <div className="stack">
        {experience.items.map((item) => (
          <CardView
            key={`${item.title}-${item.when}`}
            title={item.title}
            subtitle={item.when}
          >
            <ul>
              {item.bullets.map((b, idx) => (
                <li key={`${item.title}-${idx}`}>{b}</li>
              ))}
            </ul>
          </CardView>
        ))}
      </div>
    </section>
  );
}
