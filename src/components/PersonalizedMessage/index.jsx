import React from "react";

function PersonalizedMessage(props) {
  return (
    <>
      <div>
        <p>Hi {props.name}, you're going to {props.place} in {props.season}!</p>
        <p>Here's an intinerary of things you should see, based on </p>
        <p>{props.interest}</p>
      </div>
    </>
  )
}

export default PersonalizedMessage;

