import React, { useContext } from "react";
import { GlobalDispatch, GlobalProps } from "./BookManagement";

const SearchBar = () => {
  const dispatch = useContext(GlobalDispatch);
  const globalProps = useContext(GlobalProps);
  const { query, url } = globalProps;
  return (
    <form
      className="app__form"
      onSubmit={(e) => {
        e.preventDefault();

        dispatch({
          type: "SET_URL",
        });
      }}
    >
      <input
        className="app__form--searchbar"
        type="text"
        value={query}
        placeholder="Search"
        onChange={(e) => {
          dispatch({ type: "QUERY", payload: e.target.value });
        }}
      ></input>
      <img
        alt="searchicon"
        onClick={() => {
          dispatch({
            type: "SET_URL",
          });
        }}
        src="mdi_search.svg"
        className="app__form--searchicon"
      ></img>
    </form>
  );
};

export default SearchBar;
