import type { AboutModel } from "../../model/siteModel";
import SectionTitleView from "./SectionTitleView";

type Props = {
  about: AboutModel;
};

export default function AboutView({ about }: Props) {
  return (
    <section className="section fade-in">
      <SectionTitleView id="about" title={about.title} />

      {about.paragraphs.map((p, idx) => (
        <p key={idx}>{p}</p>
      ))}
    </section>
  );
}
