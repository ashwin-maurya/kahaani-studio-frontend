import React, { useState, useEffect, useContext } from "react";
import MainContent from "../section/SingleArticlesPage/MiddleSection/ArticleMainContent";
import Footer from "../section/SingleArticlesPage/MiddleSection/ArticleFooter";
import ArticleHero from "../section/SingleArticlesPage/MiddleSection/ArticleHero";
import { useParams } from "react-router-dom";
import ArticleClientContext from "../Contexts/Articles/ArticleClientContext";
import SingleBlogPageSkeleton from "./Skeletons/SingleBlogPageSkeleton";
import ShareModal from "../section/Share/ShareModal";
import ShareModalHorizonatal from "../section/Share/ShareModalHorizonatal";
import { Helmet } from "react-helmet";

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
  const metaDescription = "defaul tdescription";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" key="description" content={metaDescription} />
        <meta name="title" key="title" content={title} />
        <meta property="og:title" key="og:title" content={title} />
        <meta property="og:locale" key="og:locale" content="en_US" />
        <meta charSet="utf-8" />
        <meta property="og:type" key="og:type" content="website" />
        <meta
          property="og:description"
          key="og:description"
          content={metaDescription}
        />
        <meta property="og:image" key="og:image" content={imageURL} />
      </Helmet>
      <div className=" mx-auto mt-20 flex w-full items-start justify-start px-10 max-md:flex-col max-md:px-5 max-sm:px-0">
        <ShareModal title={title} />
        <article className="mx-auto max-w-[70vw] border-r border-black max-md:max-w-full  max-md:border-none max-md:pr-0">
          <ArticleHero
            title={title}
            date={date}
            category={category}
            imageURL={imageURL}
          />
          <MainContent content={articleContent?.content} />
          <div className="mx-0 max-sm:mx-2  2xl:mx-20">
            <div className="">
              <ShareModalHorizonatal title={title} />
            </div>
            <Footer />
          </div>
        </article>
      </div>
    </>
  );
}
