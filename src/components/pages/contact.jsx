import React, { useEffect } from 'react';
import myImage from "/teamwork.jpg"
import logo from '../../assets/images/logo.png';
import githubLogo from '../../assets/images/github.png';
import rachel from '../../assets/images/rachel.png';
import igor from '../../assets/images/igor.png';
import olubukola from '../../assets/images/olubukola.jpg';
import placeholder from '../../assets/images/placeholder.jpg';

function Contact() {
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.documentElement.style.height = '100%';
    document.body.style.height = '100%';
  }, []);

  const teamMembers = [
    { name: "Antonia Yovcheva", image: placeholder, github: "https://github.com/ToniY97" },
    { name: "Igor Traspadini", image: igor, github: "https://github.com/IgorTraspadini" },
    { name: "Olubukola Ogundele", image: olubukola, github: "https://github.com/FolaBookie" },
    { name: "Rachel Atkinson", image: rachel, github: "https://github.com/rdatkinson" }
  ];

  return (
    <div className="flex justify-center items-center max-h-screen bg-black">
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto p-8 bg-french-gray text-tekhelet text-center border-4 rounded border-muted-purple shadow-md">
        <header>
            <img src={logo} alt="Time Tourists Logo" className="profile-image w-1/2 h-auto mx-auto"/>
        </header>
        <h1 className="mb-2 font-bold">Contact Us</h1>
        <section className="flex justify-around items-center flex-wrap">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center p-4">
              <img src={member.image} alt={`${member.name} Profile`} className="w-24 h-24 mb-2 rounded-full"/>
              <p className="text-tekhelet mb-2">{member.name}</p>
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <img src={githubLogo} alt="GitHub Logo" className="w-6 h-6"/>
              </a>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Contact;