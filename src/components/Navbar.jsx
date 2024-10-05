import { CgNametag } from "react-icons/cg";

const Navbar = ({ scrollToSkills, scrollToExperiences, scrollToEducation, scrollToAchievements, scrollToProjects }) => {
  return (
    <nav>
      <div className="flex items-center justify-between p-10 lg:flex-row">
        <div className="text-white font-mono text-3xl tracking-wider flex items-center">
          <CgNametag /> Anika's Portfolio
        </div>
        <div className="space-x-4">
          <div className="ssm:hidden lg:block space-x-2">
            <button
              onClick={scrollToSkills}
              className="text-white hover:bg-rose-400 rounded-full px-5 py-2 text-xl"
            >
              Skills
            </button>
            <button
              onClick={scrollToExperiences}
              className="text-white hover:bg-cyan-400 rounded-full px-5 py-2 text-xl"
            >
              Experiences
            </button>
            <button
              onClick={scrollToEducation}
              className="text-white hover:bg-purple-400 rounded-full px-5 py-2 text-xl"
            >
              Education
            </button>
            <button
              onClick={scrollToAchievements}
              className="text-white hover:bg-orange-400 rounded-full px-5 py-2 text-xl"
            >
              Achievements
            </button>
            <button
              onClick={scrollToProjects}
              className="text-white hover:bg-fuchsia-400 rounded-full px-5 py-2 text-xl"
            >
              Projects
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
