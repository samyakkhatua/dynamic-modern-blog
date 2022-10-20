import React from "react";
import { Link, Routes, Route, NavLink } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ReactMarkdown from "react-markdown";
import { useQuery, gql } from "@apollo/client";

const BLOGS = gql`
  query GetBlogs {
    blogs {
      data {
        id
        attributes {
          Title
          publishedAt
          Body
        }
      }
    }
  }
`;

const Blog = () => {
  // const { loading, error, data } = useFetch("http://localhost:1337/api/blogs");

  const { loading, error, data } = useQuery(BLOGS)

  if (loading) return <h3> Loading... </h3>;
  if (error) return <p>Error... </p>;

  // console.log(data.blogs.data);

  return (
    <>
      <h1 className="font-inter text-4xl mt-5 text-center">Blog Home page</h1>

      <Link to="/">
        <button className="font-inter bg-bermuda text-black w-[30%] mx-[5%] rounded-2xl py-2 mt-7">
          Home page
        </button>
      </Link>

      <Link to="sample-blog">
        <button className="bg-bermuda text-black w-[30%] mx-[5%] rounded-2xl py-2 mt-7">
          Sample Blog
        </button>
      </Link>

      {/* ======================= */}
      <div>
        {data.blogs.data.map((blog) => (
          <div key={blog.id} className="m-5">
            <h2 className="font-bold text-lg">{blog.attributes.Title}</h2>
            <p>
              <ReactMarkdown>
                {blog.attributes.Body.substring(0, 100)+"..."}
              </ReactMarkdown>
            </p>
            <Link to={`/blog/${blog.id}`}>
              <button className="bg-bermuda rounded-md mt-2 px-2 text-black">Read more</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
