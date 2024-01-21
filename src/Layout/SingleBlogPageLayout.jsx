import React from "react";
import Hero from "../section/SingleBlogPage/LeftSection/Hero";
import MainContent from "../section/SingleBlogPage/LeftSection/MainContent";
import AboutColumn from "../section/SingleBlogPage/RightSection/AboutColumn";
export default function SingleBlogPageLayout() {
  return (
    <>
      <div class=" mx-auto mt-16 flex w-full items-start justify-start px-10">
        <div className="max-w-[73vw] border-r border-black pr-10  2xl:max-w-[70vw]">
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
