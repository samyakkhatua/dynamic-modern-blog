import React from "react";
import BlogStats from "../components/BlogHome/BlogStats";
import FeaturedPosts from "../components/BlogHome/FeaturedPosts";
import LatestPosts from "../components/BlogHome/LatestPosts";
import Navbar from "../components/Navbar";

const BlogHome = () => {
  return (
    <>
      <div className="bg-white pb-64">
        <div className="w-[70%] mx-auto">
          <Navbar />

          <div className="flex flex-col w-[80%] mx-auto">
            <h1 className="mt-24 text-7xl font-bold">
              Tutorials for designers & <br />
              React frontend devs
            </h1>

            <p className="mt-3  text-xl w-[60%]">
              Learn more about topics such Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Lorem ipsum dolor sit amet.
            </p>
          </div>

          <BlogStats />
          <FeaturedPosts/>
          <LatestPosts/>
        </div>
      </div>
    </>
  );
};

export default BlogHome;
