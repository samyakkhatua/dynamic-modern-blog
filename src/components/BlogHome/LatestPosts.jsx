import React from "react";

const LatestPosts = () => {
  return (
    <>
      {/* header */}
      <div className="mt-32 divide-y flex flex-col">
        <div className="">
          <h2 className="text-3xl font-bold float-left">Latest Posts</h2>
          <p className="text-xl float-right ">See all</p>
        </div>
        {/* <div className="mt-3 border-t-[3px] border-[#a5a5a7]"> </div> */}
      </div>

      {/* blog search box*/}
      <div class="box mt-4">
        <div class="box-wrapper">
          <div className=" bg-ofWhite rounded-xl flex items-center w-full px-2 shadow-sm border border-gray-200">
            <button class="outline-none focus:outline-none">
              <svg
                class=" w-5 text-gray-600 h-5 cursor-pointer"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
            <input
              type="search"
              name=""
              id=""
              placeholder="Search blogs, topics and more"
              x-model="q"
              class="w-full pl-3 text-sm bg-transparent border-ofWhite focus:border-ofWhite focus:ring-0 focus:ring-inherit"
            />
            <div class="select">
              <select
                name=""
                id=""
                x-model="image_type"
                class="text-sm bg-transparent border-ofWhite outline-0 rounded-lg focus:border-ofWhite focus:ring-0 focus:ring-inherit font-semibold"
              >
                <option value="all" selected className="">
                  All
                </option>
                <option value="photo">Photo</option>
                <option value="illustration">Illustration</option>
                <option value="vector">Vector</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* latest posts section  */}
      <div className="flex columns-2 gap-4">
        {/* Latest blogs cards */}
        <div className=" w-full mt-4 grid gap-x-4 gap-y-4 grid-cols-2">
          {/* column 1 */}
          <div className="w-full rounded-xl bg-[#ececf0de]">
            {/* img section   */}
            <div className="h-[50%] bg-tahiti rounded-t-xl flex justify-center items-center">
              <img
                src="/src/assets/navbar samyak img.png"
                alt=""
                className="w-[50%]"
              />
            </div>

            {/* content section  */}
            <div className="p-4 h-[350px] ">
              <p className="text-[12px] ">CATEGORY</p>

              <p className="text-lg font-bold leading-6 pt-2	">
                Title Lorem ipsum dolor dsjhu sit amet.
              </p>
              <p className="mt-3 text-[14px] mb-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis perferendis dolorem laborum...{" "}
              </p>
              <p className="font-bold text-sm underline mb-6">
                Read full story..
              </p>

              <div className="text-left">
                <span className="text-[10px]">
                  By: Samyak Khatua | On: 16th October 2022 | 7 minutes Read
                </span>
              </div>
            </div>
          </div>

          <div className="w-full rounded-xl bg-[#ececf0de]">
            {/* img section   */}
            <div className="h-[50%] bg-purple-600 rounded-t-xl flex justify-center items-center">
              <img
                src="/src/assets/navbar samyak img.png"
                alt=""
                className="w-[50%]"
              />
            </div>

            {/* content section  */}
            <div className="p-4 h-[350px] ">
              <p className="text-[12px] ">CATEGORY</p>

              <p className="text-lg font-bold leading-6 pt-2	">
                Title Lorem ipsum dolor dsjhu sit amet.
              </p>
              <p className="mt-3 text-[14px] mb-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis perferendis dolorem laborum...{" "}
              </p>
              <p className="font-bold text-sm underline mb-6">
                Read full story..
              </p>

              <div className="text-left">
                <span className="text-[10px]">
                  By: Samyak Khatua | On: 16th October 2022 | 7 minutes Read
                </span>
              </div>
            </div>
          </div>

          <div className="w-full rounded-xl bg-[#ececf0de]">
            {/* img section   */}
            <div className="h-[50%] bg-yellow-300 rounded-t-xl flex justify-center items-center">
              <img
                src="/src/assets/navbar samyak img.png"
                alt=""
                className="w-[50%]"
              />
            </div>

            {/* content section  */}
            <div className="p-4 h-[350px] ">
              <p className="text-[12px] ">CATEGORY</p>

              <p className="text-lg font-bold leading-6 pt-2	">
                Title Lorem ipsum dolor dsjhu sit amet.
              </p>
              <p className="mt-3 text-[14px] mb-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis perferendis dolorem laborum...{" "}
              </p>
              <p className="font-bold text-sm underline mb-6">
                Read full story..
              </p>

              <div className="text-left">
                <span className="text-[10px]">
                  By: Samyak Khatua | On: 16th October 2022 | 7 minutes Read
                </span>
              </div>
            </div>
          </div>

          <div className="w-full rounded-xl bg-[#ececf0de]">
            {/* img section   */}
            <div className="h-[50%] bg-bermuda rounded-t-xl flex justify-center items-center">
              <img
                src="/src/assets/navbar samyak img.png"
                alt=""
                className="w-[50%]"
              />
            </div>

            {/* content section  */}
            <div className="p-4 h-[350px] ">
              <p className="text-[12px] ">CATEGORY</p>

              <p className="text-lg font-bold leading-6 pt-2	">
                Title Lorem ipsum dolor dsjhu sit amet.
              </p>
              <p className="mt-3 text-[14px] mb-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis perferendis dolorem laborum...{" "}
              </p>
              <p className="font-bold text-sm underline mb-6">
                Read full story..
              </p>

              <div className="text-left">
                <span className="text-[10px]">
                  By: Samyak Khatua | On: 16th October 2022 | 7 minutes Read
                </span>
              </div>
            </div>
          </div>

          {/* column 1 */}
          <div className="w-full rounded-xl bg-[#ececf0de]">
            {/* img section   */}
            <div className="h-[50%] bg-midnight rounded-t-xl flex justify-center items-center">
              <img
                src="/src/assets/navbar samyak img.png"
                alt=""
                className="w-[50%]"
              />
            </div>

            {/* content section  */}
            <div className="p-4 h-[350px] ">
              <p className="text-[12px] ">CATEGORY</p>

              <p className="text-lg font-bold leading-6 pt-2	">
                Title Lorem ipsum dolor dsjhu sit amet.
              </p>
              <p className="mt-3 text-[14px] mb-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis perferendis dolorem laborum...{" "}
              </p>
              <p className="font-bold text-sm underline mb-6">
                Read full story..
              </p>

              <div className="text-left">
                <span className="text-[10px]">
                  By: Samyak Khatua | On: 16th October 2022 | 7 minutes Read
                </span>
              </div>
            </div>
          </div>

          {/* column 1 */}
          <div className="w-full rounded-xl bg-[#ececf0de]">
            {/* img section   */}
            <div className="h-[50%] bg-orange-300 rounded-t-xl flex justify-center items-center">
              <img
                src="/src/assets/navbar samyak img.png"
                alt=""
                className="w-[50%]"
              />
            </div>

            {/* content section  */}
            <div className="p-4 h-[350px] ">
              <p className="text-[12px] ">CATEGORY</p>

              <p className="text-lg font-bold leading-6 pt-2	">
                Title Lorem ipsum dolor dsjhu sit amet.
              </p>
              <p className="mt-3 text-[14px] mb-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis perferendis dolorem laborum...{" "}
              </p>
              <p className="font-bold text-sm underline mb-6">
                Read full story..
              </p>

              <div className="text-left">
                <span className="text-[10px]">
                  By: Samyak Khatua | On: 16th October 2022 | 7 minutes Read
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* side bar */}
        <div className="flex flex-col w-[40%] mt-4 bg-yellow">
          {/* Optin form */}
          <div className="bg-[#ccf0fa] p-4 rounded-xl">
            <p className="text-[20px] font-bold">
              Subscribe <br /> blog for <br /> latest updates
            </p>

            <p className="text-[12px] text-[#99A0A4] mb-4">
              By submitting this you will bw receiving our latest updates on
              post.
            </p>

            <input
              type="email"
              placeholder="Enter your email address.."
              className="rounded-md w-full text-sm bg-white border-[#E4F9FF] focus:border-[#E4F9FF] focus:ring-0 focus:ring-inherit placeholder:text-[12px] placeholder:text-[#99A0A4]"
            />

            <button className="bg-[#FF545D] text-white rounded-md mt-2 w-full py-2 text-[12px]">
              Subscribe Now!
            </button>
          </div>

          {/* categories selector */}
          <h2 className="mt-10 text-[20px] font-bold float-left">Categories</h2>

          <div className="">
            
            <button className="px-3 mt-4 mr-2 py-1.5 bg-[#ccf0fa] rounded-md text-[12px]">
              Marketing
            </button>
            <button className="px-3 mt-2 mr-2 py-1.5 bg-[#ccf0fa] rounded-md text-[12px]">
              Business
            </button>
            <button className="px-3 mt-2 mr-2 py-1.5 bg-[#ccf0fa] rounded-md text-[12px]">
              D2C
            </button>
            <button className="px-3 mt-2 mr-2 py-1.5 bg-[#ccf0fa] rounded-md text-[12px]">
              Marketplace
            </button>
            <button className="px-3 mt-2 mr-2 py-1.5 bg-[#ccf0fa] rounded-md text-[12px]">
              Startup
            </button>
            <button className="px-3 mt-2 mr-2 py-1.5 bg-[#ccf0fa] rounded-md text-[12px]">
              Sales
            </button>
            <button className="px-3 mt-2 mr-2 py-1.5 bg-[#ccf0fa] rounded-md text-[12px]">
              ReactJS
            </button>
            <button className="px-3 mt-2 mr-2 py-1.5 bg-[#ccf0fa] rounded-md text-[12px]">
              Java
            </button>
            <button className="px-3 mt-2 mr-2 py-1.5 bg-[#ccf0fa] rounded-md text-[12px]">
              Javasript
            </button>
            <button className="px-3 mt-2 mr-2 py-1.5 rounded-md text-[12px] bg-[#ccf0fa86]">
              View all..
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestPosts;
