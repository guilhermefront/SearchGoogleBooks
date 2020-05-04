import React, { useEffect, useContext, useState } from "react";
import { GlobalProps } from "./BookManagement";
import { GlobalDispatch } from "./BookManagement";

const BookList = () => {
  const globalProps = useContext(GlobalProps);
  const dispatch = useContext(GlobalDispatch);
  const { bookData, situation, url } = globalProps;

  useEffect(() => {
    const bookAsync = async () => {
      try {
        dispatch({ type: "REINITIALIZER" });
        const result = await fetch(url);
        const data = await result.json();
        console.log(data.items);
        if (data.items === undefined) {
          dispatch({ type: "ERRO" });
        } else {
          dispatch({ type: "BOOK_ADD", payload: data.items });
        }
      } catch (error) {
        dispatch({ type: "ERRO" });
      }
    };

    bookAsync();
  }, [url]);

  return situation === "erro" ? (
    <div className="app__erro">Livro não encontrado.</div>
  ) : (
    <ul className="app__booklist">
      {bookData.map((dataValues) => (
        <li key={dataValues.id} className="app__booklist--item">
          <img
            alt="book illustration"
            src={
              dataValues.volumeInfo.imageLinks.smallThumbnail ||
              dataValues.volumeInfo.imageLinks.thumbnail
            }
            className="app__booklist--item--image"
          ></img>
          <div className="app__booklist--item--text">
            <span className="app__booklist--item--text--title">
              {dataValues.volumeInfo.title.length > 35
                ? `${dataValues.volumeInfo.title.slice(0, 35)}...`
                : dataValues.volumeInfo.title}
            </span>
            <p className="app__booklist--item--text--author">
              {dataValues.volumeInfo.authors}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
