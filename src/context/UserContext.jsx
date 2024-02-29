import React, { useState } from "react";

const UserContext = React.createContext();

function UserContextProvider({ children }) {
  const [currentUserDetails, setCurrentUserDetails] = useState(null);
  const [histories, setHistories] = useState([]);

  const setUserDetails = (name, email) =>
    setCurrentUserDetails({ name, email });

  const getUserSelectedHistory = async (place, year, interest) => {
    // api call here
  };
  return (
    <UserContext.Provider
      value={{
        user: currentUserDetails,
        setUser: setUserDetails,
        userHistories: histories,
        getHistory: getUserSelectedHistory,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => React.useContext(UserContext);

export default UserContextProvider;
