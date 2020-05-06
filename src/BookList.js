import React, { useEffect, useContext, useState } from "react";
import { GlobalProps } from "./BookManagement";
import { GlobalDispatch } from "./BookManagement";

const BookList = () => {
  const globalProps = useContext(GlobalProps);
  const dispatch = useContext(GlobalDispatch);
  const { bookData, situation, url, query } = globalProps;

  useEffect(() => {
    const bookAsync = async () => {
      try {
        dispatch({ type: "REINITIALIZER" });
        const result = await fetch(url);
        const data = await result.json();

        if (data.items === undefined) {
          dispatch({ type: "ERRO" });
        } else {
          dispatch({ type: "BOOK_ADD", payload: data.items });
        }
      } catch (error) {
        dispatch({ type: "ERRO" });
      }
    };

    console.log(url);
    if (
      url !==
      "https://www.googleapis.com/books/v1/volumes?q=&key=AIzaSyBvBig7VqgizPMI7CU0Xxa7LxuO5lUMtTo"
    ) {
      bookAsync();
    }
  }, [url]);

  return situation === "erro" ? (
    <div className="app__erro">Livro não encontrado.</div>
  ) : (
    <ul className="app__booklist">
      {bookData.map((dataValues) => (
        <li
          key={dataValues.id}
          className="app__booklist--item"
          onClick={() => {
            window.open(`${dataValues.volumeInfo.infoLink}`);
          }}
        >
          <div className="app__booklist--item--container">
            <div className="app__booklist--item--container--bookinfo">
              <img
                alt="book illustration"
                src={
                  dataValues.volumeInfo &&
                  dataValues.volumeInfo.imageLinks &&
                  dataValues.volumeInfo.imageLinks.smallThumbnail
                }
                className="app__booklist--item--container--bookinfo--image"
              ></img>
              <div className="app__booklist--item--container--bookinfo--text">
                <span className="app__booklist--item--container--bookinfo--text--title">
                  {window.innerWidth <= 500 &&
                  dataValues.volumeInfo.title.length > 35
                    ? `${dataValues.volumeInfo.title.slice(0, 35)}...`
                    : dataValues.volumeInfo.title.length > 60
                    ? `${dataValues.volumeInfo.title.slice(0, 60)}...`
                    : dataValues.volumeInfo.title}
                </span>
                {dataValues.volumeInfo &&
                dataValues.volumeInfo.authors &&
                window.innerWidth <= 320 ? (
                  <p className="app__booklist--item--container--bookinfo--text--author">
                    {`${
                      dataValues.volumeInfo.authors[0] >= 15
                        ? dataValues.volumeInfo.authors[0].slice(0, 15)
                        : dataValues.volumeInfo.authors[0]
                    }...`}
                  </p>
                ) : dataValues.volumeInfo &&
                  dataValues.volumeInfo.authors &&
                  window.innerWidth <= 350 ? (
                  `${
                    dataValues.volumeInfo.authors[1]
                      ? dataValues.volumeInfo.authors[1] +
                        dataValues.volumeInfo.authors[0]
                      : dataValues.volumeInfo.authors[0]
                  }`.length > 20 ? (
                    <p className="app__booklist--item--container--bookinfo--text--author">
                      {`${
                        dataValues.volumeInfo.authors[1]
                          ? dataValues.volumeInfo.authors[1] +
                            ", " +
                            dataValues.volumeInfo.authors[0]
                          : dataValues.volumeInfo.authors[0].slice(0, 20)
                      }...`}
                    </p>
                  ) : (
                    dataValues.volumeInfo &&
                    dataValues.volumeInfo.authors && (
                      <p className="app__booklist--item--container--bookinfo--text--author">
                        {dataValues.volumeInfo.authors.join(", ")}
                      </p>
                    )
                  )
                ) : dataValues.volumeInfo &&
                  dataValues.volumeInfo.authors &&
                  window.innerWidth <= 500 ? (
                  `${
                    dataValues.volumeInfo.authors[1]
                      ? dataValues.volumeInfo.authors[1] +
                        dataValues.volumeInfo.authors[0]
                      : dataValues.volumeInfo.authors[0]
                  }`.length > 25 ? (
                    <p className="app__booklist--item--container--bookinfo--text--author">
                      {`${
                        dataValues.volumeInfo.authors[1]
                          ? dataValues.volumeInfo.authors[1] +
                            ", " +
                            dataValues.volumeInfo.authors[0]
                          : dataValues.volumeInfo.authors[0].slice(0, 25)
                      }...`}
                    </p>
                  ) : (
                    dataValues.volumeInfo &&
                    dataValues.volumeInfo.authors && (
                      <p className="app__booklist--item--container--bookinfo--text--author">
                        {dataValues.volumeInfo.authors.join(", ")}
                      </p>
                    )
                  )
                ) : (
                  dataValues.volumeInfo &&
                  dataValues.volumeInfo.authors && (
                    <p className="app__booklist--item--container--bookinfo--text--author">
                      {dataValues.volumeInfo.authors.join(", ")}
                    </p>
                  )
                )}
              </div>
            </div>

            <ul
              style={{
                top:
                  dataValues.volumeInfo &&
                  dataValues.volumeInfo.authors &&
                  `${
                    dataValues.volumeInfo.authors[0]
                      ? dataValues.volumeInfo.authors[0]
                      : dataValues.volumeInfo.authors[1] &&
                        dataValues.volumeInfo.authors[1]
                  }`.length > 21 &&
                  "1.8rem",
              }}
              className="app__booklist--item--container--list"
            >
              <li className="app__booklist--item--container--list--item">
                <span className="app__booklist--item--container--list--item--title">
                  Year:
                </span>
                <span className="app__booklist--item--container--list--item--content">
                  {dataValues.volumeInfo.publishedDate === undefined
                    ? "unk"
                    : `${dataValues.volumeInfo.publishedDate}`.slice(0, 4)}
                </span>
              </li>
              {window.innerWidth <= 400 ? null : (
                <li className="app__booklist--item--container--list--item">
                  <span className="app__booklist--item--container--list--item--title">
                    Pages:
                  </span>
                  <span className="app__booklist--item--container--list--item--content">
                    {dataValues.volumeInfo.pageCount === undefined
                      ? "unk"
                      : dataValues.volumeInfo.pageCount}
                  </span>
                </li>
              )}
              <li className="app__booklist--item--container--list--item">
                <span className="app__booklist--item--container--list--item--title">
                  Language:
                </span>
                <span className="app__booklist--item--container--list--item--content">
                  {`${dataValues.volumeInfo.language}`.toUpperCase()}
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
