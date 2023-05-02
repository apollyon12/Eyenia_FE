import React, { createContext, useReducer } from "react";
import { initialState, AppState, reducers } from "./state";

export const AppContext = createContext({
  state: initialState,
  dispatch: () => undefined,
});

export const AppContextProvider = (props) => {
  const [store, dispatch] = useReducer(reducers, initialState);

  return (
    <AppContext.Provider
      value={{
        state: store,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
