import React from "react";
import Wrapper from "../Wrapper";
import { returnToLocalStorage } from "../../assets/js/add_return_ItemToLocalStorage.js";

function History() {
  const LStorage = returnToLocalStorage("search");
  return (
    <>
      <div className="w-full bg-black p-4 min-h-screen mx-auto">
        <div className="py-5 bg-french-gray mx-5 rounded-lg p-4 shadow border-4 rounded border-muted-purple shadow-md">
          {LStorage.map((item, it) =>
            <>
              <p key={Math.random()} className="text-tekhelet font-semibold">Itinerary for {item.user}, who went to {item.place} in {item.period} with an interest in {item.interest}!</p>
              <div className="mb-5">
                {item.response.map((v, i) =>
                  <>
                    {i > 0 &&
                      <div key={Math.random()} className="mb-2 mt-2 ms-4 text-tekhelet">{LStorage[parseInt(it)].response[parseInt(i)].props.children}</div>}
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