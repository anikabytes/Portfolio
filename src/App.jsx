import { useRef } from "react";
import Navbar from "./components/Navbar";
import Skills from "./screens/Skills";
import Experiences from "./screens/Experiences";
import Education from "./screens/Education";
import Achievements from "./screens/Achievements";
import Projects from "./screens/Projects";
import MyProfile from "./screens/Profile";

const App = () => {
  // Create refs for each section
  const skillsRef = useRef(null);
  const experiencesRef = useRef(null);
  const educationRef = useRef(null);
  const achievementsRef = useRef(null);
  const projectsRef = useRef(null);

  // Function to scroll to a specific section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-900 hover:bg-slate-800">
      {/* Pass the scrollToSection function and refs to the Navbar */}
      <Navbar
        scrollToSkills={() => scrollToSection(skillsRef)}
        scrollToExperiences={() => scrollToSection(experiencesRef)}
        scrollToEducation={() => scrollToSection(educationRef)}
        scrollToAchievements={() => scrollToSection(achievementsRef)}
        scrollToProjects={() => scrollToSection(projectsRef)}
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
      <div ref={achievementsRef}>
        <Achievements />
      </div>
    </div>
  );
};

export default App;
