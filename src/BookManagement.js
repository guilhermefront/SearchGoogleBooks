import React, { useReducer, useEffect } from "react";

const GlobalProps = React.createContext();
const GlobalDispatch = React.createContext();

export const BookManagement = ({ children }) => {
  const initialState = {
    bookData: [],
    querySucess: "false",
    query: "",
    situation: "nothing",
    url:
      "https://www.googleapis.com/books/v1/volumes?q=&key=AIzaSyBvBig7VqgizPMI7CU0Xxa7LxuO5lUMtTo",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "BOOK_ADD":
        return {
          ...state,
          bookData: action.payload,
        };
      case "QUERY":
        return {
          ...state,
          query: action.payload,
        };
      case "SET_URL":
        return {
          ...state,
          url: `https://www.googleapis.com/books/v1/volumes?q=${state.query}&key=AIzaSyBvBig7VqgizPMI7CU0Xxa7LxuO5lUMtTo`,
          query: "",
        };
      case "ERRO":
        return {
          ...state,
          bookData: [],
          situation: "erro",
        };
      case "REINITIALIZER":
        return {
          ...state,
          situation: "normal",
        };
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
