import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" bg-[#ccf0fa] h-[150px] mt-32">
        <div className="flex columns-4 gap-[50px] w-[80%] mx-auto pt-[50px] justify-between ">
          {/* logo & brand name  */}
          <div className=" ">
            <a href="" class="flex items-center ">
              <img
                src="/src/assets/navbar samyak img.png"
                class="mr-3 h-6 sm:h-9"
                alt="Samyak Img"
              />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ">
                Samyak Khatua
              </span>
              <p className="ml-4 font-thin text-4xl text-[#94999b]">|</p>
            </a>{" "}
          </div>

          {/* email id */}
          <div className="text-[12px] font-bold underline my-auto">
            <p>hello@samyakkhatua.in</p>
          </div>

          {/* T&C */}
          <div className="items-center">
            <p className="text-[#94999b] text-[12px] text-center mb-2">
              © 2022 company. All right reserved.
            </p>
            <div className="flex justify-between gap-3">
              <p className="text-[12px] font-bold underline">
                Terms & Conditions
              </p>
              <p className="text-[14px] text-[#94999b]">|</p>
              <p className="text-[12px] font-bold underline">Privacy Policy</p>
            </div>
            
          </div>

          <div>
          <p className="ml-4 font-thin text-4xl text-[#94999b]">|</p>

          </div>

          {/* social icons */}
          <div>
            <p className="text-[#94999b] text-[12px] bold mb-2">
              Follow me:</p>
            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
