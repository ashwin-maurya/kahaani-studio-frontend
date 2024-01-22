import React from "react";
import Hero from "../section/SingleBlogPage/LeftSection/Hero";
import MainContent from "../section/SingleBlogPage/LeftSection/MainContent";
import AboutColumn from "../section/SingleBlogPage/RightSection/AboutColumn";
import ShareModal from "../section/SingleBlogPage/LeftSection/ShareModal";

export default function SingleBlogPageLayout() {
  return (
    <>
      <ShareModal />
      <div class=" mx-auto mt-16 flex w-full items-start justify-start px-10 max-md:flex-col max-md:px-5 max-sm:px-0">
        <div className="max-w-[73vw] border-r border-black pr-10 max-md:max-w-full max-md:border-none max-md:pr-0  2xl:max-w-[70vw]">
          <Hero />
          <MainContent />
        </div>
        <div className="pl-5">
          <AboutColumn />
        </div>
      </div>
    </>
  );
}
