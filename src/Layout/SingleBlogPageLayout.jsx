import React from "react";
import Hero from "../section/SingleBlogPage/hero";
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
