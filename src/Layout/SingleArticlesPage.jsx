import React from "react";
import MainContent from "../section/SingleArticlesPage/MiddleSection/ArticleMainContent";
import Footer from "../section/SingleArticlesPage/MiddleSection/ArticleFooter";
import ArticleHero from "../section/SingleArticlesPage/MiddleSection/ArticleHero";
import ShareModal from "../section/SingleArticlesPage/ShareModal";
export default function SingleArticlesPage() {
  return (
    <>
      <div className=" mx-auto mt-20 flex w-full items-start justify-start px-10 max-md:flex-col max-md:px-5 max-sm:px-0">
        <ShareModal />
        <div className="mx-auto max-w-[80vw] border-r border-black max-md:max-w-full  max-md:border-none max-md:pr-0">
          <ArticleHero />
          <MainContent />
          <div className="mx-40">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
