import type { CreatorModel } from "../../model/siteModel";
import SectionTitleView from "./SectionTitleView";

type Props = {
  creator: CreatorModel;
};

export default function CreatorView({ creator }: Props) {
  return (
    <section id="creator" className="section fade-in">
    <SectionTitleView
        id="creator"
        title={creator.title}
        subtitle={creator.intro}
      />

      <div className="hint">{creator.hint}</div>

      {/* Placeholder slider. Later we will add JS controls and lazy iframe load. */}
      <div className="grid">
        {creator.videos.map((v) => (
          <article key={v.id} className="card">
            <h3>{v.title}</h3>
            <p>{v.desc}</p>
            <p>
              <a href={v.url} target="_blank" rel="noreferrer">
                Watch
              </a>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
