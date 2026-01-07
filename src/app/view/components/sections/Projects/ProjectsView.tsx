import type { ProjectsModel } from "../../../../model/siteModel";
import SectionTitleView from "../../ui/SectionTitle/SectionTitleView";
import CardView from "../../ui/Card/CardView";

type Props = {
  projects: ProjectsModel;
};

export default function ProjectsView({ projects }: Props) {
  return (
<section id="projects" className="section fade-in">
  <SectionTitleView title={projects.title} subtitle={projects.intro} />

      <div className="grid">
        {projects.items.map((p) => (
          <CardView key={p.title} title={p.title} subtitle={p.meta}>
            <p>{p.desc}</p>

            {p.url && (
              <p className="card-actions">
                <a href={p.url} target="_blank" rel="noreferrer">
                  View
                </a>
              </p>
            )}
          </CardView>
        ))}
      </div>
    </section>
  );
}
