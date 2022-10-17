import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ReactMarkdown from "react-markdown";
import { useQuery, gql } from "@apollo/client";

const BLOG = gql`
  query GetBlog($id: ID!) {
    blog(id: $id) {
      data {
        attributes {
          Body
        }
      }
    }
  }
`;

const PostContent = () => {
  const { id } = useParams();
  // const { loading, error, data } = useFetch(
  //   `http://localhost:1337/api/blogs/` + id
  // );

  const { loading, error, data } = useQuery(BLOG, {
    variables: { id: id },
  });
  
  if (loading) return <h3> Loading... </h3>;
  if (error) return <p>Error... </p>;

  return (
    <>
      <div className="">
        <p className="prose max-w-[100%] text-lg text-gray-800">
          <ReactMarkdown className="">
            {data.blog.data.attributes.Body}
          </ReactMarkdown>
        </p>
      </div>
    </>
  );
};

export default PostContent;
