import React from "react";
import ChatComponent from "../Chatgpt_API";

function FactsandFigures(props) {
  <div className="facts-and-figures-container my-8 mx-auto p-4 bg-light-blue rounded-lg shadow">
  <h2 className="text-dark-green text-xl font-bold mb-4">Your top picks</h2>
  return (<ChatComponent where={props.place} when={props.season} interest={props.interest}/>)
  </div>
}

export default FactsandFigures;
