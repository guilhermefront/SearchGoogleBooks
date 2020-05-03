import React from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import BookList from "./BookList";

function App() {
  return (
    <div className="app">
      <span className="app__title">Search for books</span>
      <SearchBar />
      <BookList />
    </div>
  );
}

export default App;
