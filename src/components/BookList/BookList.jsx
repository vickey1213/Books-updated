import React from "react";
import { useGlobalContext } from "../../context.";
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookList.css";

//https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = () => {
  const {
    books,
    loading,
    resultTitle,
    booksByName,
    booksTitle,
    booksByAuthor,
    booksAuthor,
    bookloading,
    authorloading,
    booksFav,
    Favloading,
    Favbooks,
    booksJane,
    Janeloading,
    Janebooks,
    SamuelBook,
    booksSamuel,
    Samuelloading,
    SamuelTitle,
  } = useGlobalContext();

  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      // removing /works/ to get only id
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : coverImg,
    };
  });

  const bookswithname = booksByName.map((singleBook) => {
    return {
      ...singleBook,
      // removing /works/ to get only id
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : coverImg,
    };
  });

  const bookswithauthor = booksByAuthor.map((singleBook) => {
    return {
      ...singleBook,
      // removing /works/ to get only id
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : coverImg,
    };
  });

  const showFav = booksFav.map((singleBook) => {
    return {
      ...singleBook,
      // removing /works/ to get only id
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : coverImg,
    };
  });

  const favJane = booksJane.map((singleBook) => {
    return {
      ...singleBook,
      // removing /works/ to get only id
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : coverImg,
    };
  });

  const bookSamuel = books.map((singleBook) => {
    return {
      ...singleBook,
      // removing /works/ to get only id
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : coverImg,
    };
  });

  // if (loading) return <Loading />;
  // if (bookloading) return <Loading />;
  // if (authorloading) return <Loading />;
  // if (Favloading) return <Loading />;
  // if (Janeloading) return <Loading />;
  // if (Samuelloading) return <Loading />;

  return (
    <section className="booklist">
      <div className="container">
        <div className="section-title">
          <h2>{resultTitle}</h2>
        </div>
        <div className="booklist-content grid">
          {booksWithCovers.slice(0, 30).map((item, index) => {
            return <Book key={index} {...item} />;
          })}
        </div>
      </div>

      {bookloading ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="section-title">
            <h2>{booksTitle}</h2>
          </div>
          <div className="booklist-content grid">
            {bookswithname.slice(0, 30).map((item, index) => {
              return <Book key={index} {...item} />;
            })}
          </div>
        </div>
      )}

      {authorloading ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="section-title">
            <h2>{booksAuthor}</h2>
          </div>
          <div className="booklist-content grid">
            {bookswithauthor.slice(0, 30).map((item, index) => {
              return <Book key={index} {...item} />;
            })}
          </div>
        </div>
      )}

      {Favloading ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="section-title">
            <h2>{Favbooks}</h2>
          </div>
          <div className="booklist-content grid">
            {showFav.slice(0, 30).map((item, index) => {
              return <Book key={index} {...item} />;
            })}
          </div>
        </div>
      )}

      {Favloading ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="section-title">
            <h2>{Janebooks}</h2>
          </div>
          <div className="booklist-content grid">
            {favJane.slice(0, 30).map((item, index) => {
              return <Book key={index} {...item} />;
            })}
          </div>
        </div>
      )}

      {Samuelloading ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="section-title">
            <h2>{SamuelBook}</h2>
          </div>
          <div className="booklist-content grid">
            {bookSamuel.slice(0, 30).map((item, index) => {
              return <Book key={index} {...item} />;
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default BookList;
