import React, { useEffect, useContext } from "react";
import { GlobalProps } from "./BookManagement";

const BookList = () => {
  useEffect(() => {
    const bookAsync = async () => {
      const response = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=search+terms",
        {
          method: "GET",
          key: "AIzaSyBvBig7VqgizPMI7CU0Xxa7LxuO5lUMtTo",
        }
      );
      const data = await response.json();
      console.log(data);
    };
    bookAsync();
  }, []);

  const globalProps = useContext(GlobalProps);
  const { bookData } = globalProps;
  console.log(bookData);

  return (
    <ul className="app__booklist">
      {bookData.map((dataValues) => (
        <li className="app__booklist--item">
          <div className="app__booklist--item--container">
            <div className="app__booklist--item--container--bookinfo">
              <img className="app__booklist--item--container--bookinfo--image"></img>
              <div className="app__booklist--item--container--bookinfo--text">
                <span className="app__booklist--item--container--bookinfo--text--title">
                  {dataValues.title}
                </span>
                <p className="app__booklist--item--container--bookinfo--text--author">
                  Carlos Moraes
                </p>
              </div>
            </div>

            <ul className="app__booklist--item--container--list">
              <li className="app__booklist--item--container--list--item">
                <span className="app__booklist--item--container--list--item--title">
                  Year:
                </span>
                <span className="app__booklist--item--container--list--item--content">
                  2008
                </span>
              </li>
              <li className="app__booklist--item--container--list--item">
                <span className="app__booklist--item--container--list--item--title">
                  Size:
                </span>
                <span className="app__booklist--item--container--list--item--content">
                  7MB
                </span>
              </li>
              <li className="app__booklist--item--container--list--item">
                <span className="app__booklist--item--container--list--item--title">
                  Type:
                </span>
                <span className="app__booklist--item--container--list--item--content">
                  EPUB
                </span>
              </li>
              <li className="app__booklist--item--container--list--item">
                <span className="app__booklist--item--container--list--item--title">
                  Language:
                </span>
                <span className="app__booklist--item--container--list--item--content">
                  English
                </span>
              </li>
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
