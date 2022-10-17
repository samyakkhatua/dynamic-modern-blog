import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Blog from "./pages/Blog";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import Page404 from "./pages/Page404";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import FramerMotion from "./pages/FramerMotion";
import BlogHome from "./pages/BlogHome";

const App = () => {
  return (
    <>
      <Routes>
        {/* Home page route  */}
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />

        {/* Blog Home page Route  */}
        <Route path="/blog">
          <Route index element={<Blog />} />

          {/* SAMPLE BLOG */}
          <Route path="sample-blog" element={<BlogPage />} />

          <Route path=":id" element={<BlogPage />} />
        </Route>

        <Route path="/blog-home" element={<BlogHome/>} />

        <Route path="framer-motion" element={<FramerMotion/>}/>

        {/* 404 Route */}
        <Route path="*" element={<Page404 />} />

        {/*  */}
      </Routes>
    </>
  );
};

export default App;
