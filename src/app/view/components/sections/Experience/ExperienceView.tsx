import type { ExperienceModel } from "../../../../model/siteModel";
import SectionTitleView from "../../ui/SectionTitle/SectionTitleView";
import CardView from "../../ui/Card/CardView";

type Props = {
  experience: ExperienceModel;
};

export default function ExperienceView({ experience }: Props) {
  return (
<section id="experience" className="section fade-in">
  <SectionTitleView title={experience.title} />

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
