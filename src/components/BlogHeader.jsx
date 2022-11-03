// import moment from "react-moment";
import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Moment from "moment";
import { useQuery, gql } from "@apollo/client";
import readTime from "../hooks/readTime";

const BLOG = gql`
  query GetBlog($id: ID!) {
    blog(id: $id) {
      data {
        attributes {
          Title
          publishedAt
          updatedAt
          Body
          categories {
            data {
              attributes {
                name
              }
            }
          }
          authors {
            data {
              attributes {
                authorName
                authorImg {
                  data {
                    id
                    attributes {
                      url
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const BlogHeader = () => {
  const { id } = useParams();

  //using REST api
  // const { loading, error, data } = useFetch(

  //   `http://localhost:1337/api/blogs/` + id
  // );
  
  const { loading, error, data } = useQuery(BLOG, {
    variables: { id: id },
  }); 

  if (loading) return <h3> Loading... </h3>;
  if (error) return <p>Error... </p>;

  console.log(readTime(data.blog.data.attributes.Body));
  const readTimes = readTime(data.blog.data.attributes.Body)

  // console.log(
  //   data.blog.data.attributes.authors.data.map(
  //     (authorId) => authorId.attributes.authorImg.data.attributes.url
  //   )
  // );

  const formatDate = Moment(
    data.blog.data.attributes.publishedAt.substring(0, 10)
  ).format("MMMM Do YYYY");

  return (
    <>
      {/* category & blog utility buttons */}
      <div className="">
        {/* catagory tag */}
        <div className="float-left">
          {data.blog.data.attributes.categories.data.map((catagoryId) => (
            <strong class="bg-blue-500 border-blue-500 border mr-2 text-white lowercase px-2 py-1 rounded-3xl text-[12px] font-medium">
              #{catagoryId.attributes.name}
            </strong>
          ))}
        </div>

        {/* blog utility icons */}
        <div className="flex float-right">
          <span class="">
            <a href="" class="block px-2 pt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </a>
          </span>

          <span class="">
            <a href="" class="block px-2 pt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                />
              </svg>

              <span class="sr-only"> Search </span>
            </a>
          </span>

          <span class="">
            <a href="" class="block px-2 pt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
              <span class="sr-only"> Search </span>
            </a>
          </span>
        </div>
      </div>

      <br />

      {/* title */}
      <div className="max-w-full mx-auto pt-7">
        <h1 class="text-3xl font-extrabold sm:text-5xl text-black">
          {data.blog.data.attributes.Title}
        </h1>
      </div>

      {/* author section and blog stats */}
      <div class="flex  py-5">
        {/* author image */}
        {data.blog.data.attributes.authors.data.map((authorId) => (
          <div class="w-10 h-10 sm:w-12 sm:h-12 min-w-fit bg-cover rounded-md -ml-1">
            <img
              src={`http://localhost:1337${authorId.attributes.authorImg.data.attributes.url}`}
              alt="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png"
              class="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow"
            />
          </div>
        ))}

        {/* author name and blog stats */}
        <div className="max-w-full ml-2 pt-0">
          {/* author name  */}
          {data.blog.data.attributes.authors.data.map((authorId) => (
            <span className="flex">
              <p className="text-xl">by</p>
              <h2 className="ml-2 text-xl font-bold sm:text-xl">
                {authorId.attributes.authorName}
              </h2>
            </span>
          ))}

          {/* blog stats  */}
          <div className="flex flex-wrap pt-0 gap-2 md:text-sm text-xs ">
            {/* publish date */}
            <div className="flex gap-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 md:w-5 md:h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
              <p className="text-gray-600">{formatDate}</p>
            </div>

            {/* Read time */}
            <div className="flex gap-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 md:w-5 md:h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className=" text-gray-600">{readTimes} mins read</p>
            </div>

            {/* Trending  */}
            <div className="flex gap-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 md:w-5 md:h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                />
              </svg>
              <p className=" text-gray-600">Trending</p>
            </div>

            {/* View count  */}
            <div className="flex gap-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <p className=" text-gray-600">365 Views</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHeader;
