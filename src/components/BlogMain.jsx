import React from "react";
// import { useState } from "react";
import BlogHeader from "./BlogHeader";
import PostContent from "./PostContent";

const BlogMain = () => {
  return (
    <>
      <div className="-mt-20 px-6">
        <div className="rounded-3xl bg-white p-7 sm:ml-5 sm:w-[70%]">
          <BlogHeader />
          <PostContent />
        </div>
      </div>
    </>
  );
};

export default BlogMain;
