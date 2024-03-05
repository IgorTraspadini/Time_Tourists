import React from "react";

function PersonalizedMessage(props) {

  return (
    <>
      <div className="py-5 my-5 bg-light-blue rounded-lg p-4 shadow">
        <p className="text-dark-green font-semibold">Hi {props.name}, you're going to {props.place} in {props.season}!</p>
        <p className="text-dark-yellow mt-2">Here's an intinerary of things you should see, based on {props.interest}</p>
      </div>
    </>
  )
}

export default PersonalizedMessage;

