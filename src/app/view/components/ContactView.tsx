import type { SiteModel } from "../../model/siteModel";
import SectionTitleView from "./SectionTitleView";

type Props = {
  contact: SiteModel["contact"];
};

export default function ContactView({ contact }: Props) {
  return (
    <section id="contact" className="section fade-in">
      <SectionTitleView id="contact" title="Contact" />

      <p>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </p>

      <div className="links">
        {contact.links.map((l) => (
          <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
            {l.label}
          </a>
        ))}
      </div>
    </section>
  );
}
