import React from "react";
import { useState } from "react";
import { Route, Routes, Link, useParams } from "react-router-dom";
import { BlogMain } from "../components";
import Cover from "../components/Cover";
import NewsletterOptIn from "../components/NewsletterOptIn";
import ScrollToTop from "../components/ScrollToTop";
import useFetch from "../hooks/useFetch";

const BlogPage = () => {


  return (
    <>
      <div className="">
        <Cover />
        <BlogMain /> <br />
        <NewsletterOptIn />
        <ScrollToTop />
      </div>
    </>
  );
};

export default BlogPage;
