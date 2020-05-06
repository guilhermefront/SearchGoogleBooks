import React, { useEffect } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import BookList from "./BookList";
import { BookManagement } from "./BookManagement";

function App() {
  return (
    <div className="app">
      <BookManagement>
        <span className="app__title">Search for information about books</span>
        <SearchBar />
        <BookList />
      </BookManagement>
    </div>
  );
}

export default App;
