import React from "react";
import { Link } from "react-router-dom";

const Book = (book) => {
  return (
    <div className="book-item flex flex-column flex-sb">
      <Link to={`/book/${book.id}`} {...book}>
        <div className="book-item-img">
          <img src={book.cover_i} alt="cover_i" />
        </div>
        <div className="book-item-info text-center">
          <div className="info-item info-title fw-7 fs-18">
            <span>{book.title}</span>
          </div>
          <div className="info-author fs-15">
            <span className="info-item text-capitalize fw-7">Author : </span>
            <span>{book.author_name}</span>
          </div>
          <div className="info-item edition-count fs-15">
            <span className="text-capitalize fw-7">Total Editions: </span>
            <span>{book.edition_count}</span>
          </div>
          <div className="publish-year fs-15">
            <span className="text-capitalize fw-7">First Publish Year : </span>
            <span>{book.first_publish_year}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Book;
