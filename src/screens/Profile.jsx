import { BsFacebook, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import MyPic from '../assets/anika_pic.jpg';
import AnikaCV from '../assets/Anika_CV.pdf'; 
import { useState, useEffect } from 'react';

const Profile = () => {
  const [displayedText, setDisplayedText] = useState(""); 
  const fullText = "Anika Islam"; 

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index += 1;
      if (index === fullText.length) {
        clearInterval(typingInterval); 
      }
    }, 200); 

    return () => clearInterval(typingInterval); 
  }, []);

  return (
    <section className="flex justify-around items-center p-10 space-x-5 lg:flex-row ssm:flex-col ssm:space-y-10 text-cyan-400   ">
      <div className="lg:w-1/3 ssm:w-fit">
        <p className=" text-4xl mb-5 font-serif text-cyan-300 ">
          Hello, Everyone. I am 
        </p>
        <h1 className=" text-8xl font-serif text-bold ">
          {displayedText}
        </h1>
        <p className="mt-10 text-xl font-sans">
        </p>
      </div>

      <div className='w-1/3 items-center'>
        <img 
          src={MyPic} 
          alt="Anika" 
          width={200} 
          height={200}
          className="animate-border-pulse rounded-full w-fit border-8 border-cyan-300 hover:border-cyan-500"
        />
      </div>

      <div className='w-1/3 items-center ssm:w-fit'>
        <p className="text-4xl mb-4 text-cyan-300 font-serif">About Me</p>
        <p className="animate-pulse text-slate-300  font-serif">
          An aspiring student of CSE 
          <p className="animate-pulse text-slate-300  font-serif mb-10">
            with a thirst for learning new technologies 
          </p>
        </p>
        
        <a
          href={AnikaCV}
          download="ANIKA ISLAM CV.pdf" 
          className="inline-block  items-center bg-center bg-gradient-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:to-teal-400 text-white px-10 py-2 rounded-md hover:text-white"
        >
          Resume 
        </a>

        <div className="animate-bounce flex mt-10 space-x-4 cursor-pointer ">
          <a href="https://www.facebook.com/anikaislamporoma" target="_blank" rel="noopener noreferrer">
            <BsFacebook size={40} className="border-4 hover:border-cyan-300 rounded-full" />
          </a>
          <a href="https://www.linkedin.com/in/anika-islam-2002a08u17" target="_blank" rel="noopener noreferrer">
            <BsLinkedin size={40} className="border-4 hover:border-cyan-300 rounded-full" />
          </a>
          <a href="https://www.github.com/anikabytes" target="_blank" rel="noopener noreferrer">
            <BsGithub size={40} className="border-4 hover:border-cyan-300 rounded-full" />
          </a>
          {/* <a href="https://www.twitter.com/anikaa_tweets" target="_blank" rel="noopener noreferrer">
            <BsTwitter size={40} className="border-4 hover:border-cyan-300 rounded-full" />
          </a> */}
          <a href="mailto:anikaislamporoma17@gmail.com" target="_blank" rel="noopener noreferrer"> 
            <MdEmail size={40} className="border-4 hover:border-cyan-300 rounded-full" />
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default Profile;
