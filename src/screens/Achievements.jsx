import React from 'react';

const Achievements = () => {
  const achieve = [
    // {
    //   award: "BRACU AcademicBased Scholarship",
    //   description:"For maintaing highest distinction for 10 consecutive semesters {100% scholarship - 4 times, 75% scholarship - 4 times}"
    // },
    {
      award: "BUCC IntraHactive 1.0 Participation Certification",
      description:"For participating in the Database Wizard segment of IntraHactive 1.0"
    },
    {
      award: "All Girls' Best Team",
      description:"For performing best in the Intra University Programming Contest (IUPC), 2022"
    },
    // {
    //   award: "BRACU Previous Academic Based Scholarship",
    //   description:"50% Scholarship for acquiring 6A*s and 3As in O'Level and 2As in A'Level {3 times} "
    // },
    {
      award: "AHZ Awards",
      description:"For acquiring 2 As in May 2020 EDEXCEL IAL Examinations"
    },
    {
      award: "A'Level MLIS Merit Based Scholarship",
      description:"50% Scholarship for  acquiring 6 A*s and 3 As in May 2018 EDEXCEL IGCSE Examinations"
    },
    {
      award: "Pearson Edexcel Excellence Award",
      description:"For acquiring 6 A*s and 3 As in May 2018 EDEXCEL IGCSE Examinations"
    },
    {
        award: "The Daily Star Awards",
        description:"For acquiring 6 A*s and 3 As in May 2018 EDEXCEL IGCSE Examinations"
    },
    {
        award: "The Daily Sun Awards",
        description:"For acquiring 6 A*s and 3 As in May 2018 EDEXCEL IGCSE Examinations"
    }
  ];


  return (
    <div className="animate-border-pulse border-4 border-cyan-300 bg-opacity-35 m-5 sm:m-20 max-w-full  p-5">
      <div className="w-full max-w-5xl animate-border-pulse ">
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
              <div className="mt-4 text-cyan-100 font-light font-serif ">
                 {achieve.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Achievements;

