import { createContext, useReducer } from "react";
import haberReducer, { initialState } from "./haberReducer";

export const HaberContext = createContext();

const HaberProvider = ({ children }) => {
  const [state, reducerDispatch] = useReducer(haberReducer, initialState);

  return (
    <HaberContext.Provider value={{ state, reducerDispatch }}>
      {children}
    </HaberContext.Provider>
  );
};

export default HaberProvider;
