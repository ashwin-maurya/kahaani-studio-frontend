import React from "react";
import HeroAbout from "../section/Home/HeroAbout";
import About from "../section/Home/About";
import BlogContent from "../section/Home/BlogContent";
import StoryContent from "../section/Home/StoryContent";
import BlogCards from "../section/Home/BlogCards";
import Newsletter from "../section/Home/Newsletter";
import YoutubeContent from "../section/Home/YoutubeContent";
export default function HomeLayout() {
  return (
    <div>
      <HeroAbout />
      <StoryContent />
      <YoutubeContent />
      <Newsletter />
      <BlogCards />
    </div>
  );
}
