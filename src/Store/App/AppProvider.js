import React, { useContext, useReducer } from "react";
import AppReducer from "Store/App/AppReducer";
import AppState from "Store/App/AppState";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const contextValue = useReducer(AppReducer, AppState);
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
export default AppProvider;

export const useApp = () => {
  const contextValue = useContext(AppContext);
  return contextValue;
};
