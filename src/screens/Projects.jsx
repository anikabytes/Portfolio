import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Course Tracker",
      link: "https://anikabytes.github.io/BRACU_UG_CourseTracker"
    },
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
    },
    {
      title: "Stress Level Detection",
      link: "https://github.com/anikabytes/BRACU_CSE422_Student_Stress_Level_Detection"
    },
    {
      title: "Tic Tac Toe",
      link: "https://github.com/anikabytes/BRACU_CSE341_TicTacToe"
    },
  ];

  const handleBoxClick = (link) => {
    window.open(link, '_blank'); 
  };

  return (
    <div className="min-h-screen bg-slate-900 bg-opacity-35 text-white flex flex-col justify-center items-center sm:m-20 p-5">
      <div className="w-full max-w-5xl border-4 border-cyan-300 animate-border-pulse ">
        <div className="grid justify-items-center m-5 md:m-10">
          <h1 className="animate-pulse text-3xl text-cyan-300 mt-10 font-serif font-extrabold">PROJECTS</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 p-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-border-pulse w-full bg-opacity-35 rounded-xl shadow-md shadow-cyan-300 overflow-hidden hover:animate-pulse cursor-pointer"
              onClick={() => handleBoxClick(project.link)}
            >
              <div className="p-8 text-center">
                <div className="uppercase tracking-wide text-lg font-semibold text-cyan-300 font-serif">
                  <a href={project.link}>{project.title}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
