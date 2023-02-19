import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
const URL = "http://openlibrary.org/search.json?title=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  const [bookname, setBookname] = useState("the lost world");
  const [booksByName, setBooksByName] = useState([]);
  const [bookloading, setBookLoading] = useState(true);
  const [booksTitle, setBooksTitle] = useState(" Books");

  const [authorName, setauthorName] = useState("Hans Christian Andersen");
  const [booksByAuthor, setbooksByAuthor] = useState([]);
  const [authorloading, setAuthorLoading] = useState(true);
  const [booksAuthor, setbooksAuthor] = useState("Favorite Authors");

  const [FavBook, setFavBook] = useState("Dante Alighieri");
  const [booksFav, setbooksFav] = useState([]);
  const [Favloading, setFavLoading] = useState(true);
  const [Favbooks, setFavbooks] = useState("Favorite Books");

  const [JaneBook, setJaneBook] = useState("Jane Austen");
  const [booksJane, setbooksJane] = useState([]);
  const [Janeloading, setJaneLoading] = useState(true);
  const [Janebooks, setJanebooks] = useState("Favorite Books");

  const [SamuelBook, setSamuelBook] = useState("Samuel Beckett");
  const [booksSamuel, setbooksSamuel] = useState([]);
  const [Samuelloading, setSamuelLoading] = useState(true);
  const [SamuelTitle, setSamuelTitle] = useState("Favorite Books");

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}${searchTerm}`);
      const data = await response.json();
      const { docs } = data;
      if (docs) {
        const newBooks = docs.slice(0, 20).map((bookSingle) => {
          const {
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
          } = bookSingle;
          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title,
          };
        });
        setBooks(newBooks);
        if (newBooks.length > 1) {
          setResultTitle("Your Search Result");
        } else {
          setResultTitle("No Search Result Found!");
        }
      } else {
        setBooks([]);
        setResultTitle("No Search Result Found!");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  const showBooks = useCallback(async () => {
    setBookLoading(true);
    try {
      const response = await fetch(`${URL}${bookname}`);
      const data = await response.json();
      console.log(data);
      const { docs } = data;

      if (docs) {
        const newBooks = docs.slice(0, 20).map((bookSingle) => {
          const {
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
          } = bookSingle;

          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title,
          };
        });

        setBooksByName(newBooks);

        if (newBooks.length > 1) {
          setBooksTitle("Favorite Books");
        } else {
          setBooksTitle("No Search Result Found!");
        }
      } else {
        setBooksByName([]);
        setBooksTitle("No Search Result Found!");
      }
      setBookLoading(false);
    } catch (error) {
      console.log(error);
      setBookLoading(false);
    }
  }, [bookname]);

  const fetchAuthor = useCallback(async () => {
    setAuthorLoading(true);
    try {
      const response = await fetch(`${URL}${authorName}`);
      const data = await response.json();
      const { docs } = data;

      if (docs) {
        const newBooks = docs.slice(0, 20).map((bookSingle) => {
          const {
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
          } = bookSingle;

          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title,
          };
        });

        setbooksByAuthor(newBooks);

        if (newBooks.length > 1) {
          setbooksAuthor("Favorite Authors");
        } else {
          setbooksAuthor("No Search Result Found!");
        }
      } else {
        setbooksByAuthor([]);
        setbooksAuthor("No Search Result Found!");
      }
      setAuthorLoading(false);
    } catch (error) {
      console.log(error);
      setAuthorLoading(false);
    }
  }, [authorName]);

  const showFav = useCallback(async () => {
    setBookLoading(true);
    try {
      const response = await fetch(`${URL}${FavBook}`);
      const data = await response.json();
      const { docs } = data;

      if (docs) {
        const newBooks = docs.slice(0, 20).map((bookSingle) => {
          const {
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
          } = bookSingle;

          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title,
          };
        });

        setbooksFav(newBooks);

        if (newBooks.length > 1) {
          setFavbooks("Books By Dante Alighieri");
        } else {
          setFavbooks("No Search Result Found!");
        }
      } else {
        setbooksFav([]);
        setFavbooks("No Search Result Found!");
      }
      setFavLoading(false);
    } catch (error) {
      console.log(error);
      setFavLoading(false);
    }
  }, [FavBook]);

  const showJane = useCallback(async () => {
    setJaneLoading(true);
    try {
      const response = await fetch(`${URL}${JaneBook}`);
      const data = await response.json();
      const { docs } = data;

      if (docs) {
        const newBooks = docs.slice(0, 20).map((bookSingle) => {
          const {
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
          } = bookSingle;

          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title,
          };
        });

        setbooksJane(newBooks);

        if (newBooks.length > 1) {
          setJanebooks("Books By Jane Austen");
        } else {
          setJanebooks("No Search Result Found!");
        }
      } else {
        setbooksJane([]);
        setJanebooks("No Search Result Found!");
      }
      setJaneLoading(false);
    } catch (error) {
      console.log(error);
      setJaneLoading(false);
    }
  }, [JaneBook]);

  const showSamuel = useCallback(async () => {
    setSamuelLoading(true);
    try {
      const response = await fetch(`${URL}${SamuelBook}`);
      const data = await response.json();
      const { docs } = data;

      if (docs) {
        const newBooks = docs.slice(0, 20).map((bookSingle) => {
          const {
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
          } = bookSingle;

          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title,
          };
        });

        setbooksSamuel(newBooks);

        if (newBooks.length > 1) {
          setSamuelBook("Books By Dante Alighieri");
        } else {
          setSamuelBook("No Search Result Found!");
        }
      } else {
        setbooksSamuel([]);
        setbooksSamuel("No Search Result Found!");
      }
      setSamuelTitle(false);
    } catch (error) {
      console.log(error);
      setSamuelTitle(false);
    }
  }, [SamuelBook]);

  useEffect(() => {
    fetchBooks();
    showBooks();
    fetchAuthor();
    showFav();
    showJane();
    showSamuel();
  }, [searchTerm, fetchBooks]);

  return (
    <AppContext.Provider
      value={{
        loading,
        books,
        setSearchTerm,
        resultTitle,
        setResultTitle,
        setBookname,
        booksByName,
        booksTitle,
        setauthorName,
        booksByAuthor,
        booksAuthor,
        bookloading,
        setAuthorLoading,
        authorloading,
        setFavBook,
        booksFav,
        Favloading,
        Favbooks,
        setJaneBook,
        booksJane,
        Janeloading,
        Janebooks,
        booksSamuel,
        Samuelloading,
        SamuelTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
