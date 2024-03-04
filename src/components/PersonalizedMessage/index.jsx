import React from "react";

function PersonalizedMessage(props) {
  return (
    <>
      <div className="py-5 my-5">
        <p>Hi {props.name}, you're going to {props.place} in {props.season}!</p>
        <p>Here's an intinerary of things you should see, based on {props.interest}</p>
      </div>
    </>
  )
}

export default PersonalizedMessage;

