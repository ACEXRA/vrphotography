import React, { useState } from "react";

export const AuthContext = React.createContext();

const AuthContextProvider = (props) => {
  const [logged, setLogged] = useState(false);

  return (
    <AuthContext.Provider value={{ logged, setLogged }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
