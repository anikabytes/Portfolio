import React from 'react';

const Thesis = () => {
  const thesis = [
    {
      title: "Evaluating the Efficacy of GAN-Generated Synthetic Medical Images in Enhancing Deep Learning-Based Diagnosis of Rare Diseases",
      link: "https://github.com/anikabytes/BRACU_Undergrad_Thesis",
      type: "Thesis",
      domain: "Medical",
      field: "Deep Learning, Image Processing, Explainable AI",
      duration: "September'2023 - February'2025"
    },

    {
      title: "Not Decided",
      domain : "Education",
      type: "Project",
      
      field: "HCI",
      duration: "March'2025-Present"
    },

    {
      title: "Survey on Review Papers",
      domain : "Not decided yet",
      type: "Project",
      
      field: "Machine Learning, Artificial Intelligence",
      duration: "October'2024 - Present"
    },
  ];

  const handleBoxClick = (link) => {
    window.open(link, '_blank'); 
  };
  return (
    <div className="animate-border-pulse border-4 border-cyan-300 bg-opacity-35 m-5 sm:m-20 max-w-full  p-5">
      <div className="w-full max-w-5xl  animate-border-pulse ">
        <div className="grid justify-items-center m-5 md:m-10">
          <h1 className="animate-pulse text-3xl text-cyan-300 mt-10 font-serif font-extrabold">Research Work</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 p-5">
          {thesis.map((item, index) => (
            <div
              key={index}
              className="animate-border-pulse w-full bg-opacity-35 rounded-xl shadow-md shadow-cyan-300 overflow-hidden hover:animate-pulse cursor-pointer"
              onClick={() => handleBoxClick(item.link)}
            >
              <div className="p-8 text-center">
                <div className="animate-pulse uppercase tracking-wide text-lg font-semibold text-cyan-300 font-serif">
                  <a href={item.link}>{item.title}</a>
                </div>
                <div className="mt-4 text-cyan-100 font-light font-serif  ">
                  Type: {item.type}
                </div>
                <div className="mt-4 text-cyan-100 font-light font-serif ">
                  Domain: {item.domain}
                </div>
                <div className="mt-4 text-cyan-100 font-light font-serif ">
                  Field: {item.field}
                </div>
                <div className="mt-4 text-cyan-100 font-light font-serif ">
                  {item.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Thesis;


