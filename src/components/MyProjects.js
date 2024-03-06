import Footer from "./Footer";
import HeroUnit from "./HeroUnit";
import ScrollToTop from "./ScrollToTop";
import ProjectsCards from "./ProjectsCards";

function MyProjects() {
  return (
    <>
      <main>
        <HeroUnit />
        <ScrollToTop />
        <ProjectsCards />
      </main>
      <Footer />
    </>
  );
}

export default MyProjects;
