import { createContext } from "react";

export const userContext = createContext();
export const userProvider = ({ children }) => {
  return <userContext.Provider value={}></userContext.Provider>;
};
