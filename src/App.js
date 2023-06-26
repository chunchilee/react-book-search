import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookDetails from "./components/BookDetails";
import BookList from "./components/BookList";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="about" element={<About />} />
            <Route path="book" element={<BookList />} />
            <Route path="/book/:id" element={<BookDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
