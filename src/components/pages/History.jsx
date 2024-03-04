import React from "react";
import FactsandFigures from "../FactsAndFigures";
import PersonalizedMessage from "../PersonalizedMessage";
import Wrapper from "../Wrapper";
import { useUserContext } from "../../context/UserContext";

function History() {
  const { user, selection } = useUserContext();

  return (
    <Wrapper>
      <PersonalizedMessage
        name={user.name}
        place={selection.where}
        season={selection.when}
        interest={selection.interest}
      />
      <FactsandFigures
        place={selection.where}
        season={selection.when}
        interest={selection.interest}
      />
    </Wrapper>
  );
}

export default History;
