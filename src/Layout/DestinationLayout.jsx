import React from "react";
import ArticlesContent from "../section/Destinations/ArticlesContent";
import Hero from "../section/Destinations/Hero";
import SubTravelDestinations from "../section/Travel/TravelDestination/SubTravelDestinations";
export default function DestinationLayout() {
  return (
    <>
      <div className=" w-fulL mx-auto mt-20 px-10 max-md:flex-col max-md:px-5 max-sm:px-0">
        <div>
          <Hero />
        </div>
        <div className="flex flex-col ">
          <ArticlesContent />
        </div>
        <div className="my-20">
          <h1>
            <span className="font-CooperHevitt text-4xl font-thin uppercase max-md:text-xl">
              Explore More Destinations
            </span>
          </h1>
          <SubTravelDestinations />
        </div>
      </div>
    </>
  );
}
