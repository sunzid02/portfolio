import type { ProjectsModel } from "../../model/siteModel";
import SectionTitleView from "./SectionTitleView";
import CardView from "./CardView";

type Props = {
  projects: ProjectsModel;
};

export default function ProjectsView({ projects }: Props) {
  return (
    <section className="section fade-in">
      <SectionTitleView
        id="projects"
        title={projects.title}
        subtitle={projects.intro}
      />

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
