import React from "react";

function PersonalizedMessage(props) {
  return (
    <>
      <div className="py-5 my-5 bg-creamy-yellow rounded-lg p-4 shadow">
        <p className="text-muted-purple font-semibold">Hi {props.name}, you're going to {props.place} in {props.season}!</p>
        <p className="text-muted-purple mt-2">Here's an itinerary of things you should see, based on {props.interest}</p>
      </div>
    </>
  )
}

export default PersonalizedMessage;


