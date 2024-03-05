import React from "react";
import Wrapper from "../Wrapper";
import InputField from "../InputField";
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const { setUser } = useUserContext();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = React.useState({
    name: "",
    email: "",
  });

  const handleInputChange = (value, key) => {
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser(userDetails.name, userDetails.email);
    navigate("select-history");
  };
  return (
    <Wrapper className="bg-light-blue">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center p-4 border rounded border-dark-green shadow-md bg-white"
      >
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold mb-1 text-dark-green">Welcome to Time Tourists</h1>
          <p className="text-base text-gray-700">Enter your details to start exploring</p>
        </div>

        <div className="mx-auto w-4/5 mt-3">
          <InputField
            inputId={"name"}
            inputLabel="Enter your name"
            inputType="text"
            placeholder="John Doe"
            value={userDetails.name}
            handleInputChange={(e) => handleInputChange(e.target.value, "name")}
            required
          />

          <InputField
            inputId={"email"}
            inputLabel="Enter your email"
            inputType="email"
            placeholder="john@example.com"
            value={userDetails.email}
            handleInputChange={(e) =>
              handleInputChange(e.target.value, "email")
            }
            required
          />
          <button
            type="submit"
            className="bg-dark-yellow hover:bg-bright-blue focus:ring-4 focus:ring-dark-yellow text-white font-medium rounded-lg text-sm px-5 py-2.5 mt-4 w-full transition-colors duration-200"
          >
            Enter
          </button>
        </div>
      </form>
    </Wrapper>
  );
}

export default SignIn;
