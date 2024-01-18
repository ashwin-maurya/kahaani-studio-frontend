import React from "react";
import HeroAbout from "../section/Home/HeroAbout";
import About from "../section/Home/About";
import BlogContent from "../section/Home/BlogContent";
import StoryContent from "../section/Home/StoryContent";
export default function HomeLayout() {
  return (
    <div>
      <HeroAbout />
      <About />
      {/* <BlogContent /> */}
      <StoryContent />
    </div>
  );
}
