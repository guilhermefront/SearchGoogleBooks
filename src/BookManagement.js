import React, { useReducer, useEffect } from "react";

const GlobalProps = React.createContext();
const GlobalDispatch = React.createContext();

export const BookManagement = ({ children }) => {
  const initialState = {
    bookData: [
      {
        title: "teste",
      },
      {
        title: "teste2",
      },
    ],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalProps.Provider value={state}>
      <GlobalDispatch.Provider value={dispatch}>
        {children}
      </GlobalDispatch.Provider>
    </GlobalProps.Provider>
  );
};

export { GlobalProps, GlobalDispatch };
