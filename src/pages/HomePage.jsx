import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div>
        <h1>Home page</h1>
      </div>
      <Link to="/blog">
        <button className="bg-bermuda text-black w-[90%] mx-[5%] rounded-2xl py-2 mt-7">
          Blog
        </button>
      </Link>
    </>
  );
};

export default HomePage;
