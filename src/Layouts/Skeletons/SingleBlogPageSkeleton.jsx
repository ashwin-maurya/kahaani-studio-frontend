import React from "react";

export default function SingleBlogPageSkeleton() {
  return (
    <>
      <div className=" flex  flex-col items-center justify-center gap-20 bg-slate-50 py-20 ">
        <div className=" relative flex w-[100%] max-w-[70%] flex-col items-center   justify-center  gap-2  max-sm:gap-0">
          <p className="text-primaryMain h-12 w-[80px]    bg-gray-200  font-semibold tracking-[2px] max-sm:mb-[8px] max-sm:h-4  max-sm:rounded-sm "></p>
          <h1 className="h-12  w-[100%] bg-gray-200 font-serif text-[65px] font-bold leading-[75px] max-sm:h-6 max-sm:rounded-sm"></h1>
        </div>
      </div>
    </>
  );
}
