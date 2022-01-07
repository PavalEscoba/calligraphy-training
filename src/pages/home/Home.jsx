import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1 className="title">List of made tasks:</h1>
      <Link to="/season" className="link">
        Season
      </Link>
      <Link to="/pics" className="link">
        Pics
      </Link>
      <Link to="/youtube-class" className="link">
        Youtube (classes)
      </Link>
      <Link to="/counter" className="link">
        Counter
      </Link>
      <Link to="/songs" className="link">
        Songs
      </Link>
      <Link to="/calligraphy" className="link">
        Calligraphy
      </Link>
    </>
  );
};

export default Home;
