import { useState } from "react";
import { CgNametag } from "react-icons/cg";
import { FaBars } from "react-icons/fa"; 
import { RxCross2 } from "react-icons/rx";

const Navbar = ({ scrollToSkills, scrollToExperiences, scrollToEducation, scrollToAchievements, scrollToProjects,scrollToThesis }) => {
  const [isOpen, setIsOpen] = useState(false); 

  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="flex items-center justify-between p-10 lg:flex-row">
        <div className=" animate-pulse text-cyan-300 font-mono text-md tracking-wider flex items-center">
          <CgNametag /> Anika's Portfolio
        </div>

        
        <div className="lg:hidden">
          <button onClick={toggleSidebar} className="text-cyan-300">
            <FaBars size={15} /> 
          </button>
        </div>

        
        <div className={`fixed inset-0 bg-slate-900 bg-opacity-90 z-40 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}>
          <div className="animate-pulse flex flex-col items-start p-5">
            <button onClick={toggleSidebar} className="self-end text-cyan-300">
            <RxCross2 size={15} />
            </button>
            <button onClick={() => { scrollToSkills(); toggleSidebar(); }} className="hover:underline hover:underline-offset-4 hover:decoration-cyan-300 font-extrabold font-serif text-cyan-300 hover:text-white px-5 py-2 text-xl ">
              Skills
            </button>
            <button onClick={() => { scrollToExperiences(); toggleSidebar(); }} className="hover:underline hover:underline-offset-4 hover:decoration-cyan-300 font-extrabold font-serif text-cyan-300 hover:text-white px-5 py-2 text-xl ">
              Experience
            </button>
            <button onClick={() => { scrollToEducation(); toggleSidebar(); }} className="hover:underline hover:underline-offset-4 hover:decoration-cyan-300 font-extrabold font-serif text-cyan-300 hover:text-white px-5 py-2 text-xl">
              Education 
            </button>
            <button onClick={() => { scrollToProjects(); toggleSidebar(); }} className="hover:underline hover:underline-offset-4 hover:decoration-cyan-300 font-extrabold font-serif text-cyan-300 hover:text-white px-5 py-2 text-xl">
            Projects
            </button>
            <button onClick={() => { scrollToThesis(); toggleSidebar(); }} className="hover:underline hover:underline-offset-4 hover:decoration-cyan-300 font-extrabold font-serif text-cyan-300 hover:text-white px-5 py-2 text-xl ">
              Research Work
            </button>
            <button onClick={() => { scrollToAchievements(); toggleSidebar(); }} className="hover:underline hover:underline-offset-4 hover:decoration-cyan-300 font-extrabold font-serif text-cyan-300 hover:text-white px-5 py-2 text-xl ">
              Achievements
            </button>
          </div>
        </div>

        
        <div className="hidden lg:block space-x-0">
          <button onClick={scrollToSkills} className="animate-pulse hover:underline hover:underline-offset-4 hover:decoration--white font-extrabold font-serif text-cyan-300 hover:text-white px-5 py-2 text-xl ">
            Skills
          </button>
          <button onClick={scrollToExperiences} className="animate-pulse hover:underline hover:underline-offset-4 hover:decoration--white font-extrabold font-serif text-cyan-300 hover:text-white px-5 py-2 text-xl ">
            Experience
          </button>
          <button onClick={scrollToEducation} className="animate-pulse hover:underline hover:underline-offset-4 hover:decoration--white font-extrabold font-serif text-cyan-300 hover:text-white px-5 py-2 text-xl ">
            Education
          </button>
          <button onClick={scrollToProjects} className="animate-pulse hover:underline hover:underline-offset-4 hover:decoration-white font-extrabold font-serif text-cyan-300 hover:text-white px-5 py-2 text-xl ">
          Projects
          </button>
          <button onClick={scrollToThesis} className="animate-pulse hover:underline hover:underline-offset-4 hover:decoration--white font-extrabold font-serif text-cyan-300 hover:text-white px-5 py-2 text-xl ">
          Research Work
          </button>
          <button onClick={scrollToAchievements} className="animate-pulse hover:underline hover:underline-offset-4 hover:decoration--white font-extrabold font-serif text-cyan-300 hover:text-white px-5 py-2 text-xl ">
            Achievements
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
