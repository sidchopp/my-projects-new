import Footer from "./Footer";
import HeroUnit from "./HeroUnit";
import ScrollToTop from "./ScrollToTop";
import ProjectsCards from "./ProjectsCards";
import TechSkills from "./TechSkills";

function MyProjects() {
  return (
    <>
      <main>
        <HeroUnit />
        <TechSkills />
        <ScrollToTop />
        <ProjectsCards />
      </main>
      <Footer />
    </>
  );
}

export default MyProjects;
