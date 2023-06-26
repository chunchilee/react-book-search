import React, { useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useBooksContext } from "../context/Books";

const SearchForm = () => {
  const searchText = useRef("");
  const { setSearchTerm, setResultTitle } = useBooksContext();
  const navigate = useNavigate();
  console.log(setSearchTerm);
  console.log(searchText);

  useEffect(() => {
    searchText.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchText);
    let tempSearchTerm = searchText.current.value.trim();
    
    // 不包括大小寫英文字母、阿拉伯數字、底線_、空格、tab和\r\n
    // 只要輸入特殊符號，就會被empty string取代
    // console.log(tempSearchTerm.replace(/[^\w\s]/gi));
    // console.log(tempSearchTerm.replace(/[^\w\s]/gi, ""));
    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something");
    } else {
      setSearchTerm(searchText.current.value);
    }
    navigate("/book");
  };

  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form className="search-form " onSubmit={handleSubmit}>
            <div className="search-form-elem flex flex-sb bg-white">
              <input
                type="text"
                className="form-control"
                placeholder="The Lost World ... "
                ref={searchText}
              />
              <button
                type="submit"
                className="flex flex-c"
                onClick={handleSubmit}
              >
                <FaSearch className="text-purple" size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
