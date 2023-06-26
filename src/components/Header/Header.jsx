import SearchForm from "../SearchForm";
import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <div className="header-content flex flex-c text-center text-white">
        <h2 className="header-title text-capitalize">
          Find your book of choice
        </h2>
        <p className="header-text fs-18 fw-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae
          sapiente quibusdam consequatur perspiciatis facere laboriosam non
          nesciunt at id repudiandae, modi iste? Eligendi, rerum!
        </p>
        <SearchForm />
      </div>
    </header>
  );
};

export default Header;
