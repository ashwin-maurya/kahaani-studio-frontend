import React from "react";
import HeroAbout from "../section/Home/Hero/HeroAbout";
import StoryContent from "../section/Home/Stories/StoryContent";
import YoutubeContent from "../section/Home/YoutubeContent/YoutubeContent";
import Newsletter from "../section/Home/Newsletter/Newsletter";
import BlogCards from "../section/Home/BlogCards";
import NewsletterHero from "../section/Home/Newsletter/NewsletterHero";
export default function HomeLayout() {
  return (
    <div>
      <HeroAbout />
      <StoryContent />
      <YoutubeContent />
      <NewsletterHero />
      <BlogCards />
    </div>
  );
}
