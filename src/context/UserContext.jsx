import React, { useState } from "react";

const UserContext = React.createContext();

function UserContextProvider({ children }) {
  const [currentUserDetails, setCurrentUserDetails] = useState(null);
  const [currentUserSelection, setCurrentUserSelection] = useState(null);

  const setUserDetails = (name, email) => {
    setCurrentUserDetails({ name, email });
  }
  const setUserSelection = (where, when, interest) => {
    setCurrentUserSelection({where, when, interest});
  };
  return (
    <UserContext.Provider
      value={{
        user: currentUserDetails,
        setUser: setUserDetails,
        setSelection: setUserSelection,
        selection: currentUserSelection,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => React.useContext(UserContext);

export default UserContextProvider;
