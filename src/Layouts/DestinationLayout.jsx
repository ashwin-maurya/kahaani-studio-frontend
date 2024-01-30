import React, { useContext, useEffect } from "react";
import ArticlesContentDestination from "../section/Destinations/ArticlesContentDestination";
import Hero from "../section/Destinations/Hero";
import SubTravelDestinations from "../section/Travel/TravelDestination/SubTravelDestinations";
import BlogsContentDestination from "../section/Destinations/BlogsContentDestination";
import DestinationClientContext from "../Contexts/Destinations/DestinationClientContext";
import { useParams } from "react-router-dom";

export default function DestinationLayout() {
  const { destinations, fetchDestinations } = useContext(
    DestinationClientContext,
  );
  const { location } = useParams();

  useEffect(() => {
    // Fetch destinations when the component mounts
    fetchDestinations();
  }, []);

  const topDestinations = destinations.filter(
    (destination) =>
      destination.location.toLowerCase() !== location.toLowerCase(),
  );

  return (
    <>
      <div className=" w-fulL mx-auto mt-20 px-10 max-md:flex-col max-md:px-5 max-sm:px-0">
        <div>
          <Hero />
        </div>
        <div className="flex flex-col ">
          <ArticlesContentDestination />
        </div>
        <div className="my-10 flex flex-col">
          <BlogsContentDestination />
        </div>
        <div className="my-20">
          <h1>
            <span className="font-CooperHevitt text-4xl font-thin uppercase max-md:text-xl">
              Explore More Destinations
            </span>
          </h1>
          <SubTravelDestinations destinations={topDestinations} />
        </div>
      </div>
    </>
  );
}
