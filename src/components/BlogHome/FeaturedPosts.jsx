import React from "react";
// import styles from "../style";


const FeaturedPosts = () => {
  return (
    <>
      {/* header */}
      <div className="mt-32 divide-y flex flex-col">
        <div className="">
          <h2 className="text-3xl font-bold float-left">Featured Posts</h2>
          <p className="text-xl float-right ">See all</p>
        </div>
        {/* <div className="mt-3 border-t-[3px] border-[#a5a5a7]"> </div> */}
      </div>

      {/* boxes */}
      <div className="flex columns-2 gap-6">
        {/* 1st column boxes */}
        <div className="mt-4 gap-2 w-[50%]">
          {/* child box-1*/}
          <div className="rounded-xl w-full p-5 bg-gradient-to-tl from-gray-800 via-grey-400 to-slate-100 text-black h-[250px] relative">
            <p className="text-[12px] ">CATEGORY</p>

            <p className="text-lg w-[60%] font-bold leading-6 pt-2	">
              Title Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>

            <button className="bg-white px-2 py-1  rounded-sm font-semibold absolute bottom-5 left-5">
              READ MORE
            </button>
          </div>

          {/* child box-2 */}
          <div className="mt-4 flex columns-2 w-full gap-6">
            {/* subchild-1 */}
            <div className="rounded-xl w-full p-5 bg-gradient-to-tl from-gray-800 via-orange-400 to-slate-100 text-black h-[500px] relative">
              <p className="text-[12px] ">CATEGORY</p>

              <p className="text-lg w-[80%] font-bold leading-6 pt-2	">
                Title Lorem ipsum dolor sit amet consectetur adipisicing elit...
              </p>

              <button className="bg-white px-2 py-1  rounded-sm font-semibold absolute bottom-5 left-5">
                READ MORE
              </button>
            </div>

            {/* subchild-2 */}
            <div className="rounded-xl w-full p-5 bg-gradient-to-tl from-gray-800 via-green-300 to-slate-100 text-black h-[500px] relative">
              <p className="text-[12px] ">CATEGORY</p>

              <p className="text-lg w-[80%] font-bold leading-6 pt-2	">
                Title Lorem ipsum dolor sit amet consectetur adipisicing elit...
              </p>

              <button className="bg-white px-2 py-1  rounded-sm font-semibold absolute bottom-5 left-5">
                READ MORE
              </button>
            </div>
          </div>
        </div>

        {/* 2ND column boxes  */}
        <div className="w-[50%] gap-6">
          {/* child box-1 */}
          <div className="mt-4 flex columns-2 w-full gap-6">
            {/* subchild-1 */}
            <div className="rounded-xl w-full p-5 bg-gradient-to-tl from-gray-800 via-purple-400 to-slate-100 text-black h-[500px] relative">
              <p className="text-[12px] ">CATEGORY</p>

              <p className="text-lg w-[80%] font-bold leading-6 pt-2	">
                Title Lorem ipsum dolor sit amet consectetur adipisicing elit...
              </p>

              <button className="bg-white px-2 py-1  rounded-sm font-semibold absolute bottom-5 left-5">
                READ MORE
              </button>
            </div>

            {/* subchild-2 */}
            <div className="rounded-xl w-full p-5 bg-gradient-to-tl from-gray-800 via-indigo-400 to-slate-100 text-black h-[500px] relative">
              <p className="text-[12px] ">CATEGORY</p>

              <p className="text-lg w-[80%] font-bold leading-6 pt-2	">
                Title Lorem ipsum dolor sit amet consectetur adipisicing elit...
              </p>

              <button className="bg-white px-2 py-1  rounded-sm font-semibold absolute bottom-5 left-5">
                READ MORE
              </button>
            </div>
          </div>

          {/* child box-2 */}
          <div className="mt-4 rounded-xl w-full p-5 bg-gradient-to-tl from-gray-800 via-[#63DEE7] to-slate-100 text-black h-[250px] relative">
            <p className="text-[12px] ">CATEGORY</p>

            <p className="text-lg w-[60%] font-bold leading-6 pt-2	">
              Title Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>

            <button className="bg-white px-2 py-1  rounded-sm font-semibold absolute bottom-5 left-5">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedPosts;
