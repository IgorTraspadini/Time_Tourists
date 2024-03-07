import React from "react";
import myImage from "/teamwork.jpg"

function About() {
    return (
      <div className="about-container">
        <header>
          <img src={myImage} alt="My Photo" className="profile-image" />
          <h1>About us page </h1>
        </header>
        <section>
  
          <h2>Time Travelers App</h2>
          <p>
            We are the creators of the Time Travelers app, a unique application designed to take the user back in time and learn more about the history of their selected country. 
            With Time Travelers, user can input their name and email, select a time period, and country they want to travel back to, and save their search in their history. 
            It's an exciting project that combines our passion for technology and inovation with our ambition for easily accessible aducation resources.
          </p>
        </section>
      </div>
    );
  }
  
  export default About;