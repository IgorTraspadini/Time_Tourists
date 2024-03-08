import React, { useEffect } from 'react';
import myImage from "/teamwork.jpg"
import logo from '../../assets/images/logo.png';

function About() {
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.documentElement.style.height = '100%';
    document.body.style.height = '100%';
  }, []);

  return (
    <div className="flex justify-center items-center max-h-screen bg-black bg-black">
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto p-8 bg-french-gray text-tekhelet text-center border-4 rounded border-muted-purple shadow-md">
        <header>
            <img src={logo} alt="Time Tourists Logo" className="profile-image w-1/2 h-auto mx-auto"/>
        </header>
        <h1 className="mb-2 font-bold">Welcome to Time Tourists!</h1>
        <section>
          <p className="text-center leading-relaxed">
              At Time Tourists, we merge the thrill of travel with the allure of history, offering you a one-of-a-kind app that crafts itineraries for exploring countries through the ages. Input your destination and era, and presto! You're on your way to an adventure that spans centuries. From the grandiose courts of Renaissance Italy to the spirited speakeasies of the Roaring Twenties, we curate experiences that breathe life into history, making your travels not just memorable, but truly timeless.
              <br/>
              <br/>
              Created with love by Antonia Yovcheva, Igor Traspadini, Olubukola Ogundele, and Rachel Atkinson, Time Tourists is an exciting project that combines our passion as devs for technology and innovation with our ambition for easily accessible education resources.
          </p>
        </section>
      </div>
    </div>
  );
}
  
  export default About;