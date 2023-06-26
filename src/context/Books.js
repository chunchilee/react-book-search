import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const URL = "http://openlibrary.org/search.json?title=";

const BooksContext = createContext();

const BooksProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("the lost world");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}${searchTerm}`);
      console.log(response);
      const data = await response.json();
      console.log(data);
      const { docs } = data;

      if (docs) {
        // key是關鍵字不能當作參數的名稱
        const newBooks = docs.slice(0, 20).map((book) => {
          // console.log(book);
          const {
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
          } = book;
          return {
            id: key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
          };
        });
        console.log(newBooks);
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

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const valueProps = {
    loading,
    books,
    setSearchTerm,
    resultTitle,
    setResultTitle,
  };

  return (
    <BooksContext.Provider value={valueProps}>{children}</BooksContext.Provider>
  );
};

const useBooksContext = () => {
  return useContext(BooksContext);
};

export { useBooksContext, BooksProvider };
