import React, { useState } from "react";
import { createContext } from "react";

 export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [oken,setToken]=useState("");

    const handleToken=(newToken)=>{
        setToken(newToken)
    }
  return <AuthContext.Provider value={{oken,handleToken}}>{children}</AuthContext.Provider>;
};
