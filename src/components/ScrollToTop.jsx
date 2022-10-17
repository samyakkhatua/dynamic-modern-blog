import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const ScrollToTop = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="fixed z-1 bottom-5 right-5">
      <button onClick={scrollToTop} className="bg-bermuda hover:bg-ofWhite rounded-md p-2">
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
            d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
          />
        </svg>
      </button>
    </div>
  );
};

export default ScrollToTop;
