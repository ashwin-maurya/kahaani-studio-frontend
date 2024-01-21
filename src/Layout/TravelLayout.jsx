import React from "react";
import Articles from "../section/Travel/Articles/Articles";
import TravelDestinations from "../section/Travel/TravelDestination/TravelDestinations";
import Hero from "../section/Travel/Hero/Hero";
export default function TravelLayout() {
  return (
    <>
      <div className=" pt-16">
        <div>
          <Hero />
        </div>
        <div className="pt-14 max-w-screen-xl mx-auto">
          <TravelDestinations />
        </div>
        <div>
          <Articles />
        </div>
      </div>
    </>
  );
}
