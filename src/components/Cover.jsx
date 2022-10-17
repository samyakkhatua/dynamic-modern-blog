import React from "react";
import { Route, Routes, Link } from "react-router-dom";

const Cover = () => {
  return (
    <>
      <div className="max-w-full m-3 min-h-[20rem] rounded-3xl bg-bermuda">
        <div className="pt-5 pl-5">
          <Link to="/blog">
            <span>
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
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cover;
