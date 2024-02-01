import React from "react";
import About from "../section/About/AboutContent/About";
import Hero from "../section/About/Hero/Hero";

export default function AboutLayout() {
  return (
    <>
      <div className=" pt-[4.5rem]">
        <div>
          <Hero />
        </div>
        <div className="mt-14">
          <About />
        </div>
      </div>
    </>
  );
}
