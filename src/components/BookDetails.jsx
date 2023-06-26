import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import coverImg from "../assets/cover_not_found.jpg";
import Loading from "./Loader";

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  // console.log(useParams());
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const getBookDetails = async () => {
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        console.log(data);

        if (data) {
          const {
            description,
            title,
            covers,
            subject_places,
            subject_people,
            subjects,
          } = data;

          const newBook = {
            description: description ? description : "No description found",
            title,
            cover_i: covers
              ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
              : coverImg,
            subject_people: subject_people
              ? subject_people.join(", ")
              : "No subject people found",
            subject_places: subject_places
              ? subject_places.join(", ")
              : "No subject places found",
            subjects: subjects ? subjects.join(", ") : "No subjects found",
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getBookDetails();
  }, [id]);

  if (loading) return <Loading />;

  return (
    <div className="book-details">
      <div className="container">
        <button className="flex  back-btn" onClick={() => navigate("/book")}>
          <FaArrowLeft size={22} />
          <span className="fs-18 fw-6">Go Back</span>
        </button>
        <div className="details-content grid">
          <div className="details-img">
            <img src={book?.cover_i} alt="cover_i" />
          </div>
          <div className="details-info">
            <div className="details-title">
              <span className="fw-6 fs-24">{book?.title}</span>
            </div>
            <div className="details-description">
              <span className="fw-6">{book?.description}</span>
            </div>
            <div className="">
              <span className="fw-6">Subject Places : </span>
              <span className="text-italic">{book?.subject_places}</span>
            </div>
            <div className="">
              <span className="fw-6">Subject People : </span>
              <span className="text-italic">{book?.subject_people}</span>
            </div>
            <div className="">
              <span className="fw-6">Subjects : </span>
              <span>{book?.subjects}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
