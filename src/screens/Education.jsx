

import React from 'react';

const Education = () => {
  const currentlyStudying = [
    {
      institution: "BRAC University",
      degree: "Studying Bachelor of Science in Computer Science and Engineering",
      duration: "Spring, 2021 - Fall,2024",
      link: "https://www.bracu.ac.bd/"
    },
    {
      institution: "Maple Leaf International School",
      degree: "Completed Class VI to Class XII",
      duration: "January, 2014 - January, 2021",
      link: "https://mlis.edu.bd/"
    },
    {
      institution: "Little Jewels Nursery Infant and Junior School",
      degree: "Completed Class I to Class V",
      duration: "January, 2010 - December, 2013",
      link: "https://ljs1955.com/"
    }
  ];

  const handleBoxClick = (link) => {
    window.open(link, '_blank'); 
  };

  return (
    <div className="border-4 animate-border-pulse border-cyan-300 bg-opacity-35 m-5 sm:m-20 max-w-full  p-5">
      <div className="grid justify-items-center m-5 md:m-10">
        <h1 className="animate-pulse text-3xl font-serif text-cyan-300 font-extrabold mt-10">EDUCATION</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-5">
        {/* <h2 className="animate-pulse underline underline-offset-8 text-xl text-cyan-300 mt-6 mb-4 col-span-full font-serif font-semibold text-center">CURRENTLY STUDYING</h2> */}
        {currentlyStudying.map((education, index) => (
          <div key={index} className="animate-border-pulse w-full bg-opacity-35 rounded-xl shadow-md shadow-cyan-300 overflow-hidden hover:animate-pulse cursor-pointer" onClick={() => handleBoxClick(education.link)}>
            <div className="p-8 text-center">
              <div className="animate-pulse uppercase tracking-wide text-lg font-semibold font-serif text-cyan-300">
                {education.institution}
              </div>
              <div className="mt-4 text-cyan-100 font-light font-serif">
                 {education.degree}
              </div>
              <div className="mt-4 text-cyan-100 font-light font-serif">
                {education.duration}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="animate-border-pulse border-2 border-cyan-300 mx-auto mt-5 mb-5"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-5">
        <h2 className="animate-pulse underline underline-offset-8 text-xl text-cyan-300 mt-6 mb-4 col-span-full font-serif font-semibold text-center">STUDIED</h2>
        {studied.map((education, index) => (
          <div key={index} className="animate-border-pulse w-full bg-opacity-35 rounded-xl shadow-md shadow-cyan-300 overflow-hidden hover:animate-pulse cursor-pointer" onClick={() => handleBoxClick(education.link)}>
            <div className="p-8 text-center">
              <div className="animate-pulse font-serif uppercase tracking-wide text-lg font-semibold text-cyan-300">
                {education.institution}
              </div>
              <div className="mt-4 text-cyan-100 font-light font-serif">
                {education.degree}
              </div>
              <div className="mt-4 text-cyan-100 font-light font-serif">
                {education.duration}
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Education;
