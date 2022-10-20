import React from "react";
import BlogStats from "../components/BlogHome/BlogStats";
import FeaturedPosts from "../components/BlogHome/FeaturedPosts";
import LatestPosts from "../components/BlogHome/LatestPosts";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import styles from "../style";


const BlogHome = () => {
  return (
    <>
      <div className="bg-white">
        <div className="w-[70%] mx-auto">
          <Navbar />

          <div className="flex flex-col w-[80%] mx-auto">
            <h1 className="mt-24 text-[60px] tracking-[-1.5px] leading-[60px] font-extrabold font-inter">
              Tutorials, Resources, Snippets for designers &
              React devs
            </h1>

            <p className={`${styles.paragraph} mt-3 w-[80%]`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga perferendis, cumque officiis doloribus saepe vitae cum sint numquam ea laboriosam facilis.
            </p>
          </div>

          <BlogStats />
          <FeaturedPosts/>
          <LatestPosts/>
        </div>
      <Footer />
      </div>

    </>
  );
};

export default BlogHome;
