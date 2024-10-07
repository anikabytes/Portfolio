

import React from 'react';

const Experiences = () => {

  const currentJobs = [
    {
      company: "BRAC University",
      role: "Student Tutor (ST)",
      duration: "February, 2024 - Present",
      description: "CSE111 Student Tutor",
      link: "https://www.bracu.ac.bd/"
    },

    {
      company: "Physics-The Study Town",
      role: "Invigilator",
      duration: "March, 2024 - Present",
      description: "Invigilating Exams and Checking Scripts",
      link: "https://www.facebook.com/Physicstst"
    }
  ];

  const formerJobs = [

    {
      company: "MQ's School Of Mathematics",
      role: "Teaching Assistant (TA)",
      duration: "June, 2023 - Present",
      description: "Teaching EDEXCEL IAL Mathematics",
      link: "https://www.facebook.com/mqsirofficial2023"
    },

    {
      company: "Physics-The Study Town",
      role: "Online Teaching Assistant (TA)",
      duration: "September, 2023 - December, 2023",
      description: "Taught EDEXCEL IAL Physics",
      link: "https://www.facebook.com/Physicstst"
    },
    {
      company: "Chemistry-The Study Town",
      role: "Invigilator",
      duration: "August, 2023 - October, 2024",
      description: "Invigilated Exams and Checked Scripts",
      link: "https://www.facebook.com/profile.php?id=100057186710936"
    }
  ];

  const handleBoxClick = (link) => {
    window.open(link, '_blank'); 
  };
  return (
    <div className="animate-border-pulse border-4 border-cyan-300 bg-opacity-35 m-5 sm:m-20 max-w-full  p-5">
      <div className="grid justify-items-center ">
        <h1 className="animate-pulse text-3xl font-serif font-extrabold text-cyan-300 mt-10 ">EXPERIENCE</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-5">
        <h2 className="animate-pulse underline underline-offset-8 underline-cyan-300 text-xl text-cyan-300 mt-6 mb-4 col-span-full font-semibold font-serif text-center">CURRENT JOBS</h2>
        {currentJobs.map((job, index) => (
          <div key={index} className="w-full bg-opacity-35 rounded-xl shadow-md animate-border-pulse shadow-cyan-300 overflow-hidden hover:animate-pulse" onClick={() => handleBoxClick(job.link)}>
            <div className="p-8 text-center">
              <div className="animate-pulse uppercase tracking-wide text-lg font-serif font-semibold text-cyan-400">
                {job.company}
              </div>
              <div className="mt-4 text-white ">
                Role: {job.role}
              </div>
              <div className="mt-4 text-white">
                Duration: {job.duration}
              </div>
              <div className="mt-4 text-white">
                Description: {job.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="animate-border-pulse border-2 border-cyan-300 mx-auto mt-5 mb-5"></div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-5">
        <h2 className="animate-pulse underline underline-offset-8 text-xl text-cyan-300 mt-6 mb-4 col-span-full font-serif font-semibold text-center">FORMER JOBS</h2>
        {formerJobs.map((job, index) => (
          <div key={index} className="animate-border-pulse w-full bg-opacity-35 rounded-xl shadow-md shadow-cyan-300 overflow-hidden hover:animate-pulse" onClick={() => handleBoxClick(job.link)}>
            <div className="p-8 text-center">
              <div className="animate-pulse uppercase tracking-wide text-lg font-semibold text-cyan-300 font-serif">
                {job.company}
              </div>
              <div className="mt-4 text-white">
                Role: {job.role}
              </div>
              <div className="mt-4 text-white">
                Duration: {job.duration}
              </div>
              <div className="mt-4 text-white">
                Description: {job.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
