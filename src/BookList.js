import React from "react";

const BookList = () => {
  return (
    <ul className="app__booklist">
      <li className="app__booklist--item">
        <div className="app__booklist--item--container">
          <div className="app__booklist--item--container--bookinfo">
            <img className="app__booklist--item--container--bookinfo--image"></img>
            <div className="app__booklist--item--container--bookinfo--text">
              <span className="app__booklist--item--container--bookinfo--text--title">
                Um time para sempre
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
    </ul>
  );
};

export default BookList;
