import React from 'react';

const Achievements = () => {
  const achieve = [
    {
      award: "All Girls' Best Team",
      description:"Intra University Programming Contest (IUPC),2022"
    },
    {
      award: "AHZ Awards",
      description:"For Excellent Performance in ALevel"
    },
    {
      award: "Pearson Edexcel Excellence Award",
      description:"For Excellent Performance in OLevel"
    },
    {
        award: "The Daily Star Awards",
        description:"For Excellent Performance in OLevel"
    },
    {
        award: "The Daily Sun Awards",
        description:"For Excellent Performance in OLevel"
    }
  ];


  return (
    <div className=" border-4 animate-border-pulse border-cyan-300 m-5 sm:m-20 max-w-full  p-5">
      <div className="grid justify-items-center m-5 md:m-10">
        <h1 className="animate-pulse text-3xl text-cyan-300 mt-10 font-serif font-extrabold">ACHIEVEMENTS</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-5">
        {achieve.map((achieve, index) => (
          <div key={index} className="animate-border-pulse w-full bg-opacity-35 rounded-xl shadow-md shadow-cyan-300 hover:animate-pulse overflow-hidden  cursor-pointer" >
            <div className="p-10 text-center text-white">
              <div className="animate-pulse font-serif uppercase tracking-wide text-lg font-semibold text-cyan-300">
                {achieve.award}
              </div>
              <div className="mt-4">
                 {achieve.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;

