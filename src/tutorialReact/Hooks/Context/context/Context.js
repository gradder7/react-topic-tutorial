import { createContext, useState } from "react";

const UserContext = createContext();

//wrap every thing in the UserProvider in App.js that will pass as props here
export const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    fName: "Himanshu",
    lName: "Mehra",
  });
  return (
    //the values that have to be passed will be inside of it
    <UserContext.Provider value={{ state }}>
      {/* which component needs access to varaible */}
      { children }
    </UserContext.Provider>
  );
};
export default UserContext;
