import React from "react";
import Wrapper from "../Wrapper";
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import InputField from "../InputField";
import DropdownField from "../DropdownField";


function UserSelectForm() {
  const { user, setSelection } = useUserContext();
  const navigate = useNavigate();
  const [historySearch, setHistorySearch] = React.useState({
    where: "",
    when: "",
    interest: "",
  });

  const handleInputChange = (value, key) => {
    setHistorySearch((previousHistorySearch) => ({
      ...previousHistorySearch,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for empty fields, prevent submit if there are any empty fields
    if (Object.values(historySearch).some((field) => field === "")) {
      return;
    }

    setSelection(historySearch.where, historySearch.when, historySearch.interest);
    navigate("/search"); // Ensure the navigate path is correct
  };

  return (
    <Wrapper className="bg-creamy-yellow">
      <form
        onSubmit={handleSubmit}
        className="flex h-full justify-center flex-col items-center p-3 border rounded border-lavender shadow-md bg-white"
      >
        <div className="text-center mb-4">
          {user && <h1 className="text-muted-purple text-3xl font-bold mb-1">Hi, {user.name}</h1>}
        </div>
        <div className="mx-auto w-4/5 mt-3">
          <InputField
            inputId="where"
            inputLabel="Where would you like to go?"
            inputType="text"
            placeholder="China"
            value={historySearch.where}
            handleInputChange={(e) => handleInputChange(e.target.value, "where")}
            required
          />

          <DropdownField
            currentOption={historySearch.when}
            dropdownOptions={["Stone Age: 3.3 million to 5,000 years ago",
              "Bronze Age: 5,000 to 1,400 years ago (1,200 BC)",
              "Iron Age: 1,200 BC to 500 BC",
              "Classical Era: 500 BC to 500 AD",
              "Medieval Era: 500 AD to 1500 AD",
              "Early Modern Era: 1500 AD to 1800 AD",
              "Modern Era: 1800 AD to present"]}
            selectOption={(option) => handleInputChange(option, "when")}
            placeholder="Related with period?"
            optionPlaceholder="Select a season"
          />

          <InputField
            inputId="interest"
            inputLabel="What are you interested in?"
            inputType="text"
            placeholder="Fashion"
            value={historySearch.interest}
            handleInputChange={(e) => handleInputChange(e.target.value, "interest")}
            required
          />
          <button
            type="submit"
            className="bg-soft-pink hover:bg-lavender focus:ring-4 focus:outline-none focus:ring-lavender font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full mt-3 transition-colors duration-200 text-white"
          >
            Search
          </button>
        </div>
      </form>
    </Wrapper>
  );
}

export default UserSelectForm;