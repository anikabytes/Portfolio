import javaIcon from "../assets/java.webp";
import cIcon from "../assets/c.jpg";
import pythonIcon from "../assets/python.webp";
import mysqlIcon from "../assets/mysql.png";
import phpIcon from "../assets/PHP.png";
import reactIcon from "../assets/react.png";
import tailwindIcon from "../assets/tailwind.webp";
import htmlIcon from "../assets/html.png";
import jsIcon from "../assets/js.png";
import spreadsheetIcon from "../assets/spreadsheet.png";
import cssIcon from "../assets/css.png";
import githubIcon from "../assets/github.jpg";
import LaTexIcon from "../assets/latex.png";


const Skills = () => {

  const skillIcons = [
    { 
      icon: <img src={pythonIcon} alt="Python" className="w-16 h-16 border-4 hover:border-cyan-300 rounded-full mb-5 mr-5 sm:mr-10 sm:mb-5" /> 
    },
      { 
        icon: <img src={javaIcon} alt="Java" className="w-16 h-16 border-4 hover:border-cyan-300 rounded-full mb-5 mr-5 sm:mr-10 sm:mb-5" /> 
      },
      { 
        icon: <img src={githubIcon} alt="GitHub" className="w-16 h-16 border-4 hover:border-cyan-300 rounded-full mb-5 mr-5 sm:mr-10 sm:mb-5" /> 
      },
      { 
        icon: <img src={LaTexIcon} alt="LaTex" className="w-16 h-16 border-4 hover:border-cyan-300 rounded-full mb-5 mr-5 sm:mr-10 sm:mb-5" /> 
      },
      { 
        icon: <img src={cIcon} alt="C" className="w-16 h-16 border-4 hover:border-cyan-300 rounded-full mb-5 mr-5 sm:mr-10 sm:mb-5" /> 
      },
      { 
        icon: <img src={htmlIcon} alt="HTML" className="w-16 h-16 border-4 hover:border-cyan-300 rounded-full mb-5 mr-5 sm:mr-10 sm:mb-5" /> 
      },
      { 
        icon: <img src={mysqlIcon} alt="mySql" className="w-16 h-16 border-4 hover:border-cyan-300 rounded-full mb-5 mr-5 sm:mr-10 sm:mb-5" /> 
      },
      { 
        icon: <img src={phpIcon} alt="PHP" className="w-16 h-16 border-4 hover:border-cyan-300 rounded-full mb-5 mr-5 sm:mr-10 sm:mb-5" /> 
      },
      { 
        icon: <img src={reactIcon} alt="React" className="w-16 h-16 border-4 hover:border-cyan-300 rounded-full mb-5 mr-5 sm:mr-10 sm:mb-5" /> 
      },
      { 
        icon: <img src={jsIcon} alt="JS" className="w-16 h-16 border-4 hover:border-cyan-300 rounded-full mb-5 mr-5 sm:mr-10 sm:mb-5" /> 
      },
      { 
        icon: <img src={tailwindIcon} alt="TailwindCSS" className="w-16 h-16 border-4 hover:border-cyan-300 rounded-full mb-5 mr-5 sm:mr-10 sm:mb-5" /> 
      },
      { 
        icon: <img src={cssIcon} alt="CSS" className="w-16 h-16 border-4 hover:border-cyan-300 rounded-full mb-5 mr-5 sm:mr-10 sm:mb-5" /> 
      },
      { 
        icon: <img src={spreadsheetIcon} alt="Spreadsheet" className="w-16 h-16 border-4 hover:border-cyan-300 rounded-full mb-5 mr-5 sm:mr-10 sm:mb-5" /> 
      },

  ];

  return (
    <div className=" bg-opacity-35 animate-border-pulse border-4 border-cyan-300 m-5 sm:m-20 max-w-full  p-5">
      <div className="animate-pulse grid justify-items-center m-2">
        <h1 className="text-3xl text-cyan-300 font-serif font-extrabold mt-10  ">SKILLS</h1>
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
