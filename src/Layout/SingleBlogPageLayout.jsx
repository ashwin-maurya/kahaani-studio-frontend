import React from "react";
import Hero from "../section/SingleBlogPage/Hero";
import MainContent from "../section/SingleBlogPage/MainContent";
export default function SingleBlogPageLayout() {
  return (
    <>
      <main class="mt-20">
        <Hero />
        <MainContent />
      </main>
    </>
  );
}
