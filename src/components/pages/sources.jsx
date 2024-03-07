import React from "react";
import ChatGPTImg from "/teamwork.jpg"

function Sources() {
    const websiteUrl = "https://openai.com/blog/introducing-chatgpt-and-whisper-apis";
    return (
      <div className="about-container">
        <header>
          <h1>Sources </h1>
          <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
          <img src={ChatGPTImg} alt="ChatGPT logo" className="sources-image" />
          </a>
        </header>
        
      </div>
    );
  }
  
  export default Sources;