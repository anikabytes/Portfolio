import { FaPython, FaReact, FaJava } from "react-icons/fa";
import { SiCsharp, SiTailwindcss } from "react-icons/si";

const Skills = () => {

  const skillIcons = [
    { 
      icon: <SiCsharp size={60} className="border-4 hover:border-slate-500 rounded-full mb-5 mr-5 sm:mr-10 sm:mb-5 sm:border-4 sm:hover:border-slate-500 sm:rounded-full" />
     },
    {
       icon: <FaPython size={60} className="border-4 hover:border-slate-500 rounded-full mb-5 mr-5 sm:mr-10 sm:mb-5 sm:border-4 sm:hover:border-slate-500 sm:rounded-full" /> 
      },
    { 
      icon: <FaJava size={60} className="border-4 hover:border-slate-500 rounded-full mb-5 mr-5 sm:mr-10 sm:mb-5 sm:border-4 sm:hover:border-slate-500 sm:rounded-full" /> 
    },
    { 
      icon: <FaReact size={60} className="border-4 hover:border-slate-500 rounded-full mb-5 mr-5 sm:mr-10 sm:mb-5 sm:border-4 sm:hover:border-slate-500 sm:rounded-full" /> 
    },
    {
      icon: <SiTailwindcss size={60} className="border-4 hover:border-slate-500 rounded-full mb-5 mr-5 sm:mr-10 sm:mb-5 sm:border-4 sm:hover:border-slate-500 sm:rounded-full" /> 
    },
  ];

  return (
    <div className=" bg-slate-800 bg-opacity-35 m-5 sm:m-20 max-w-full  p-5">
      <div className="grid justify-items-center m-2">
        <h1 className="text-3xl text-white mt-10 font-sans ">SKILLS</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 p-5">
        {skillIcons.map((skill, index) => (
          <div key={index} className="flex justify-center items-center overflow-hidden">
            {skill.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
