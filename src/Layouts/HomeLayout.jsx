import React from "react";
import HeroAbout from "../section/Home/Hero/HeroAbout";
import StoryContent from "../section/Home/Stories/StoryContent";
import YoutubeContent from "../section/Home/YoutubeContent/YoutubeContent";
import HomeAbout from "../section/Home/About/HomeAbout";
import BlogCards from "../section/Home/BlogCards";
import NewsletterHero from "../section/Home/Newsletter/NewsletterHero";
import BrandLogo from "../section/Home/Brands/BrandLogo";
export default function HomeLayout() {
  return (
    <div>
      <HeroAbout />
      <div className="mx-auto max-w-screen-xl pt-0 max-md:pt-5">
        <BrandLogo />
      </div>
      <div className="mx-auto max-w-screen-xl max-md:pt-5">
        <HomeAbout />
      </div>
      <div className="mx-auto max-w-screen-xl pt-40 max-md:pt-5">
        <StoryContent />
      </div>
      <div className="mx-auto max-w-screen-xl pt-10 max-md:pt-5">
        <YoutubeContent />
      </div>
      <div className="mx-auto pt-28 max-md:pt-10">
        <NewsletterHero />
      </div>
      <div className="mx-auto max-w-screen-xl pt-20 max-md:pt-5">
        <BlogCards />
      </div>
    </div>
  );
}
