import React, { useContext } from "react";
import { GlobalDispatch, GlobalProps } from "./BookManagement";

const SearchBar = () => {
  const dispatch = useContext(GlobalDispatch);
  const globalProps = useContext(GlobalProps);
  const { query, url } = globalProps;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        dispatch({
          type: "SET_URL",
        });
      }}
    >
      <input
        className="app__searchbar"
        type="text"
        value={query}
        onChange={(e) => {
          dispatch({ type: "QUERY", payload: e.target.value });
        }}
      ></input>
      <img src="./mdi_search.svg" className="app__searchicon"></img>
    </form>
  );
};

export default SearchBar;
