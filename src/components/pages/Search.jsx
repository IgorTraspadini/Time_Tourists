import React from "react";
import FactsAndFigures from "../FactsAndFigures";
import PersonalizedMessage from "../PersonalizedMessage";
import Wrapper from "../Wrapper";
import { useUserContext } from "../../context/UserContext";

function Search() {
  const { selection, user } = useUserContext();
  return (
    <Wrapper className="bg-black p-4 min-h-screen flex flex-col justify-center">
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
      </div>
    </Wrapper>
  );
}

export default Search;
