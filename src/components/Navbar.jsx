import { useState } from "react";
import { CgNametag } from "react-icons/cg";
import { FaBars } from "react-icons/fa"; 

const Navbar = ({ scrollToSkills, scrollToExperiences, scrollToEducation, scrollToAchievements, scrollToProjects }) => {
  const [isOpen, setIsOpen] = useState(false); 

  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="flex items-center justify-between p-10 lg:flex-row">
        <div className="animate-pulse text-yellow-300 font-mono text-l tracking-wider flex items-center">
          <CgNametag /> Anika's Portfolio
        </div>

        
        <div className="lg:hidden">
          <button onClick={toggleSidebar} className="text-white">
            <FaBars size={24} /> 
          </button>
        </div>

        
        <div className={`fixed inset-0 bg-slate-800 bg-opacity-90 z-40 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}>
          <div className="animate-pulse flex flex-col items-start p-5">
            <button onClick={toggleSidebar} className="self-end text-white">
              Close
            </button>
            <button onClick={() => { scrollToSkills(); toggleSidebar(); }} className="hover:underline hover:underline-offset-4 hover:decoration-cyan-300 font-extrabold font-serif text-white hover:text-cyan-300 px-5 py-2 text-xl ">
              Skills
            </button>
            <button onClick={() => { scrollToExperiences(); toggleSidebar(); }} className="hover:underline hover:underline-offset-4 hover:decoration-cyan-300 font-extrabold font-serif text-white hover:text-cyan-300 px-5 py-2 text-xl ">
              Experiences
            </button>
            <button onClick={() => { scrollToEducation(); toggleSidebar(); }} className="hover:underline hover:underline-offset-4 hover:decoration-cyan-300 font-extrabold font-serif text-white hover:text-cyan-300 px-5 py-2 text-xl">
              Education 
            </button>
            <button onClick={() => { scrollToAchievements(); toggleSidebar(); }} className="hover:underline hover:underline-offset-4 hover:decoration-cyan-300 font-extrabold font-serif text-white hover:text-cyan-300 px-5 py-2 text-xl">
              Achievements
            </button>
            <button onClick={() => { scrollToProjects(); toggleSidebar(); }} className="hover:underline hover:underline-offset-4 hover:decoration-cyan-300 font-extrabold font-serif text-white hover:text-cyan-300 px-5 py-2 text-xl ">
              Projects
            </button>
          </div>
        </div>

        
        <div className="hidden lg:block space-x-2">
          <button onClick={scrollToSkills} className="animate-pulse hover:underline hover:underline-offset-4 hover:decoration-green-300 font-extrabold font-serif text-yellow-300 hover:text-green-300 px-5 py-2 text-xl ">
            Skills
          </button>
          <button onClick={scrollToExperiences} className="animate-pulse hover:underline hover:underline-offset-4 hover:decoration-green-300 font-extrabold font-serif text-yellow-300 hover:text-green-300 px-5 py-2 text-xl ">
            Experiences
          </button>
          <button onClick={scrollToEducation} className="animate-pulse hover:underline hover:underline-offset-4 hover:decoration-green-300 font-extrabold font-serif text-yellow-300 hover:text-green-300 px-5 py-2 text-xl ">
            Education
          </button>
          <button onClick={scrollToAchievements} className="animate-pulse hover:underline hover:underline-offset-4 hover:decoration-green-300 font-extrabold font-serif text-yellow-300 hover:text-green-300 px-5 py-2 text-xl ">
            Achievements
          </button>
          <button onClick={scrollToProjects} className="animate-pulse hover:underline hover:underline-offset-4 hover:decoration-green-300 font-extrabold font-serif text-yellow-300 hover:text-green-300 px-5 py-2 text-xl ">
            Projects
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
