import React from 'react';

const Thesis = () => {
  const thesis = [
    {
      title: "Evaluating the Efficacy of GAN-Generated Synthetic Medical Images in Enhancing Deep Learning-Based Diagnosis of Rare Diseases",
      link: "https://github.com/anikabytes/BRACU_Undergrad_Thesis",
      type: "Thesis",
      domain: "Medical",
      field: "Deep Learning + Image Processing",
      duration: "Spring'24 to present"
    },
  ];

  const handleBoxClick = (link) => {
    window.open(link, '_blank'); 
  };
  return (
    <div className="min-h-screen bg-slate-900 bg-opacity-35 text-white flex flex-col justify-center items-center sm:m-20 p-5">
      <div className="w-full max-w-5xl border-4 border-cyan-300 animate-border-pulse ">
        <div className="grid justify-items-center m-5 md:m-10">
          <h1 className="animate-pulse text-3xl text-cyan-300 mt-10 font-serif font-extrabold">Thesis/Research</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 p-5">
          {thesis.map((item, index) => (
            <div
              key={index}
              className="animate-border-pulse w-full bg-opacity-35 rounded-xl shadow-md shadow-cyan-300 overflow-hidden hover:animate-pulse cursor-pointer"
              onClick={() => handleBoxClick(item.link)}
            >
              <div className="p-8 text-center">
                <div className="uppercase tracking-wide text-lg font-semibold text-cyan-300 font-serif">
                  <a href={item.link}>{item.title}</a>
                </div>
                <div className="text-left mt-4 text-white">
                  Type: {item.type}
                </div>
                <div className="text-left mt-4 text-white">
                  Domain: {item.domain}
                </div>
                <div className="text-left mt-4 text-white">
                  Field: {item.field}
                </div>
                <div className="text-left mt-4 text-white">
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


