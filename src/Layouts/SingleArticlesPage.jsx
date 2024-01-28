import React, { useState, useEffect, useContext } from "react";
import MainContent from "../section/SingleArticlesPage/MiddleSection/ArticleMainContent";
import Footer from "../section/SingleArticlesPage/MiddleSection/ArticleFooter";
import ArticleHero from "../section/SingleArticlesPage/MiddleSection/ArticleHero";
import { useParams } from "react-router-dom";
import ArticleClientContext from "../Contexts/Articles/ArticleClientContext";
import SingleBlogPageSkeleton from "./Skeletons/SingleBlogPageSkeleton";
import ShareModal from "../section/Share/ShareModal";
import ShareModalHorizonatal from "../section/Share/ShareModalHorizonatal";
export default function SingleArticlesPage() {
  const { articleId } = useParams();
  const { fetchArticlesWithContent, articlesWithContent } =
    useContext(ArticleClientContext);

  useEffect(() => {
    // Fetch blogs when the component mounts
    fetchArticlesWithContent(articleId);
  }, [articleId]);

  const { date, title, category, imageURL, articleContent } =
    articlesWithContent;

  if (!articlesWithContent || articlesWithContent.length === 0) {
    return <SingleBlogPageSkeleton />;
  }
  console.log(articlesWithContent);

  return (
    <>
      <div className=" mx-auto mt-20 flex w-full items-start justify-start px-10 max-md:flex-col max-md:px-5 max-sm:px-0">
        <ShareModal title={title} />
        <div className="mx-auto max-w-[80vw] border-r border-black max-md:max-w-full  max-md:border-none max-md:pr-0">
          <ArticleHero
            title={title}
            date={date}
            category={category}
            imageURL={imageURL}
          />
          <MainContent content={articleContent?.content} />
          <div className="mx-40 max-sm:mx-2">
            <div className="">
              <ShareModalHorizonatal title={title} />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
