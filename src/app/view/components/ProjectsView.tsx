import type { ProjectsModel } from "../../model/siteModel";
import SectionTitleView from "./SectionTitleView";

type Props = {
  projects: ProjectsModel;
};

export default function ProjectsView({ projects }: Props) {
  return (
    <section id="projects" className="section fade-in">
    <SectionTitleView
        id="projects"
        title={projects.title}
        subtitle={projects.intro}
      />

      <div className="grid">
        {projects.items.map((p) => (
          <article key={p.title} className="card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <p className="muted">{p.meta}</p>

            {p.url && (
              <p>
                <a href={p.url} target="_blank" rel="noreferrer">
                  View
                </a>
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
