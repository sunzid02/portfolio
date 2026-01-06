import type { CreatorModel } from "../../model/siteModel";
import SectionTitleView from "./SectionTitleView";
import CardView from "./CardView";

type Props = {
  creator: CreatorModel;
};

export default function CreatorView({ creator }: Props) {
  return (
  <section id="creator" className="section fade-in">
    <SectionTitleView title={creator.title} subtitle={creator.intro} />
      <p className="hint">{creator.hint}</p>
      <div className="grid">
        {creator.videos.map((v) => (
          <CardView
            key={v.id}
            title={v.title}
            subtitle={v.desc}
            headerRight={
              <a href={v.url} target="_blank" rel="noreferrer">
                Watch
              </a>
            }
          >
            {/* placeholder for thumbnail or iframe later */}
            <div className="media-placeholder">
              Video preview will load on click
            </div>
          </CardView>
        ))}
      </div>
    </section>
  );
}
