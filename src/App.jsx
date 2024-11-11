import { useRef } from "react";
import Navbar from "./components/Navbar";
import Skills from "./screens/Skills";
import Experiences from "./screens/Experiences";
import Education from "./screens/Education";
import Achievements from "./screens/Achievements";
import Projects from "./screens/Projects";
import MyProfile from "./screens/Profile";
import Thesis from "./screens/Thesis";
import CP from "./screens/CP";
import Footer from "./components/Footer"

const App = () => {
  // Create refs for each section
  const skillsRef = useRef(null);
  const experiencesRef = useRef(null);
  const educationRef = useRef(null);
  const achievementsRef = useRef(null);
  const thesisRef = useRef(null);
  const CPRef = useRef(null);
  const projectsRef = useRef(null);

  // Function to scroll to a specific section smoothly
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-900 w-full scrollbar-custom overflow-auto h-screen">
      {/* Pass the scrollToSection function and refs to the Navbar */}
      <Navbar
        scrollToSkills={() => scrollToSection(skillsRef)}
        scrollToExperiences={() => scrollToSection(experiencesRef)}
        scrollToEducation={() => scrollToSection(educationRef)}
        scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToThesis={() => scrollToSection(thesisRef)}
        scrollToCP={() => scrollToSection(CPRef)}
        scrollToAchievements={() => scrollToSection(achievementsRef)}
      />

      {/* Sections */}
      <MyProfile />
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={experiencesRef}>
        <Experiences />
      </div>
      <div ref={educationRef}>
        <Education />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={thesisRef}>
        <Thesis />
      </div>
      {/* <div ref={CPRef}>
        <CP />
      </div> */}
      <div ref={achievementsRef}>
        <Achievements />
      </div>
      <Footer />
    </div>
  );
};

export default App;
