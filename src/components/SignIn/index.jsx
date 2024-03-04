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
    <Wrapper>
      <form
        onSubmit={handleSubmit}
        className="flex h-full justify-center flex-col justify-items-center p-3 border rounded border-sky-300"
      >
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold mb-1">Welcome to Time Tourists</h1>
          <p className="text-base">Enter your details to start exploring</p>
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
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full mt-3"
          >
            Enter
          </button>
        </div>
      </form>
    </Wrapper>
  );
}

export default SignIn;
