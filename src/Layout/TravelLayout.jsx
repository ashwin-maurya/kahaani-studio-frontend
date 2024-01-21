import React from "react";
import Articles from "../section/Travel/Articles/Articles";
import BlogContent from "../section/Travel/Blogs/BlogContent";
import TravelDestinations from "../section/Travel/TravelDestination/TravelDestinations";
import Hero from "../section/Travel/Hero/Hero";

export default function TravelLayout() {
  return (
    <>
      <div className=" pt-16">
        <div>
          <Hero />
        </div>
        <div className="mx-auto max-w-screen-xl pt-14">
          <TravelDestinations />
        </div>
        <div className="mx-auto mt-28 max-w-screen-xl max-md:mt-10 ">
          <BlogContent />
        </div>
        <div className="mx-auto mt-20 max-w-screen-xl max-md:mt-10">
          <Articles />
        </div>
      </div>
    </>
  );
}
