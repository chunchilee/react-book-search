import React from "react";
import coverImg from "../assets/cover_not_found.jpg";
import { useBooksContext } from "../context/Books";
import Book from "./Book";
import Loading from "./Loader";

const BookList = () => {
  const { books, loading, resultTitle } = useBooksContext();
  console.log(books);

  // TODO: 移除books.key多餘的字串，只保留id，修改img的路由，取出
  // https://covers.openlibrary.org/b/id/240727-S.jpg
  const renderBooksWithCovers = books.map((book) => {
    // console.log(book)
    const item = {
      ...book,
      id: book.id.replace("/works/", ""),
      cover_i: book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
        : coverImg,
    };
    // console.log(item);
    return <Book key={item.id} {...item} />;
  });
  // console.log(renderBooksWithCovers);

  if (loading) return <Loading />;

  return (
    <section className="booksList">
      <div className="container">
        <div className="section-title">
          <h2>{resultTitle}</h2>
        </div>
        <div className="booksList-content grid">{renderBooksWithCovers}</div>
      </div>
    </section>
  );
};

export default BookList;
