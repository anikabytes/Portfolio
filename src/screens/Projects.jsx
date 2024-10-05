import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Music Streaming Service",
      link: "https://github.com/anikabytes/BRACU_CSE370_Database_Systems_Project"
    },
    {
      title: "Snake Game",
      link: "https://github.com/anikabytes/BRACU_CSE423_Snake_Game"
    },
    {
      title: "DIY Design and Collaboration Website",
      link: "https://github.com/anikabytes/CSE470_DIY_Design_And_Collaboration_Website"
    }
  ];

  const handleBoxClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className=" bg-slate-800 bg-opacity-35 m-5 sm:m-20 max-w-full  p-5">
      <div className="grid justify-items-center m-5 md:m-10">
        <h1 className="text-3xl text-white mt-10 font-sans">PROJECTS</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 p-5">
        {projects.map((project, index) => (
          <div key={index} className="w-full bg-opacity-35 rounded-xl shadow-md shadow-yellow-200 overflow-hidden hover:animate-pulse cursor-pointer" onClick={() => handleBoxClick(project.link)}>
            <div className="p-8 text-center">
              <div className="uppercase tracking-wide text-lg font-semibold text-cyan-300">
                <a href={project.link}>{project.title}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
