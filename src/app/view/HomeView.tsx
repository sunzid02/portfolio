import { getSiteModel } from "../controller/siteController";
import { useFadeInOnScroll } from "./hooks/useFadeInOnScroll";
import { useActiveSection } from "./hooks/useActiveSection";

import TopBarView from "./components/sections/TopBar/TopBarView";
import HeroView from "./components/sections/Hero/HeroView";
import AboutView from "./components/sections/About/AboutView";
import TechView from "./components/sections/Tech/TechView";
import ExperienceView from "./components/sections/Experience/ExperienceView";
import ProjectsView from "./components/sections/Projects/ProjectsView";
import CreatorView from "./components/sections/Creator/CreatorView";
import TravelView from "./components/sections/Travel/TravelView";
import ContactView from "./components/sections/Contact/ContactView";

export default function HomeView() {
  useFadeInOnScroll(); // 👈 activate fade logic
  useActiveSection(); // 👈 activate fade logic

  const model = getSiteModel();

  return (
    <>
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
        <CreatorView creator={model.creator} />
        <ProjectsView projects={model.projects} />
        <TravelView travel={model.travel} />
        <ContactView contact={model.contact} />
      </main>
    </>
  );
}
