import React from "react";
import FactsandFigures from "../FactsAndFigures";
import PersonalizedMessage from "../PersonalizedMessage";
import Wrapper from "../Wrapper";
import { useUserContext } from "../../context/UserContext";

function History() {
  const selection = useUserContext();
  const user = useUserContext();

  return (
    <Wrapper className="bg-light-blue p-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
      <PersonalizedMessage
        place={selection.where}
        season={selection.when}
        interest={selection.interest}
        name={user.name}
      />
      <FactsandFigures
        place={selection.where}
        season={selection.when}
        interest={selection.interest}
      />
      </div>
    </Wrapper>
  );
}

export default History;
