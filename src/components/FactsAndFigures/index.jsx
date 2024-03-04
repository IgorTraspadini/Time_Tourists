import React from "react";
import ChatComponent from "../Chatgpt_API";

function FactsandFigures(props) {
  return (<ChatComponent where={props.place} when={props.season} interest={props.interest}/>)  
}

export default FactsandFigures;
