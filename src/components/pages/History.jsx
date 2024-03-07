import React from "react";
import FactsAndFigures from "../FactsAndFigures";
import PersonalizedMessage from "../PersonalizedMessage";
import Wrapper from "../Wrapper";
import { useUserContext } from "../../context/UserContext";

function History() {
  const { selection, user } = useUserContext();

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
      </div>
    </Wrapper>
  );
}

export default History;