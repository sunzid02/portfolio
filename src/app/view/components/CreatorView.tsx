import type { CreatorModel } from "../../model/siteModel";
import SectionTitleView from "./SectionTitleView";
import VideoCardView from "./VideoCardView";

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
          <VideoCardView key={v.id} video={v} />
        ))}
      </div>
    </section>
  );
}
