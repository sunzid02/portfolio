import { getSiteModel } from "../controller/siteController";

import TopBarView from "./components/TopBarView";
import HeroView from "./components/HeroView";
import AboutView from "./components/AboutView";
import TechView from "./components/TechView";
import ExperienceView from "./components/ExperienceView";
import ProjectsView from "./components/ProjectsView";
import CreatorView from "./components/CreatorView";
import TravelView from "./components/TravelView";
import ContactView from "./components/ContactView";

export default function HomeView() {
  // Controller থেকে data আনলাম
  const model = getSiteModel();

  return (
    <>
      {/* Three canvas later (no JS yet) */}
      <canvas id="three-canvas" aria-hidden="true"></canvas>

      <TopBarView
        brandName={model.brand.name}
        brandHref={model.brand.href}
        nav={model.nav}
      />

      <main id="top" className="container">
        <HeroView hero={model.hero} />
        <AboutView about={model.about} />
        <TechView tech={model.tech} />
        <ExperienceView experience={model.experience} />
        <ProjectsView projects={model.projects} />
        <CreatorView creator={model.creator} />
        <TravelView travel={model.travel} />
        <ContactView contact={model.contact} />
      </main>
    </>
  );
}
