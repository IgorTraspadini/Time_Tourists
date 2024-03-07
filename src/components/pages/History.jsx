import React from "react";
import Wrapper from "../Wrapper";
import { returnToLocalStorage } from "../../assets/js/add_return_ItemToLocalStorage.js";

function History() {
  const LStorage = returnToLocalStorage("search");
  return (

    <Wrapper className="flex flex-col justify-center items-center bg-black p-10 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <PersonalizedMessage
          name={user.name}
          place={selection.where}
          season={selection.when}
          interest={selection.interest}
        />
        <FactsAndFigures
          place={selection.where}
          season={selection.when}
          interest={selection.interest}
        />

    <>
      <div className="w-full bg-creamy-yellow p-4 min-h-screen mx-auto">
        <div className="py-5 bg-creamy-yellow mx-5 rounded-lg p-4 shadow">
          {LStorage.map((item, it) =>
            <>
              <p key={Math.random()} className="text-muted-purple font-semibold">Itinerary to {item.user}, going to {item.place} in {item.period} with interest in {item.interest}!</p>
              <div className="mb-5">
                {item.response.map((v, i) =>
                  <>
                    {i > 0 &&
                      <div key={Math.random()} className="mb-2 mt-2 ms-4 text-muted-purple">{LStorage[parseInt(it)].response[parseInt(i)].props.children}</div>}
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default History;