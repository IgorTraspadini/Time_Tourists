import React from "react";
import ChatComponent from "../Chatgpt_API";

function FactsAndFigures(props) {
  return (
    <div className="facts-and-figures-container my-8 mx-auto p-4 bg-creamy-yellow rounded-lg shadow">
      <h2 className="text-muted-purple text-xl font-bold mb-4">Your top picks</h2>
      <ChatComponent where={props.place} when={props.season} interest={props.interest}/>
    </div>
  )
}

export default FactsAndFigures;

