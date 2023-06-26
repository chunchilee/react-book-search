import React from "react";
import LoaderImg from "../assets/loader.svg";

const Loader = () => {
  return (
    <div className="loader flex  flex-c">
      <img src={LoaderImg} alt="LoaderImg" />
    </div>
  );
};

export default Loader;
