import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import BlogClientContext from "../Contexts/Blogs/BlogClientContext";
import Hero from "../section/SingleBlogPage/LeftSection/BlogHero";
import BlogMainContent from "../section/SingleBlogPage/LeftSection/BlogMainContent";
import AboutColumn from "../section/SingleBlogPage/RightSection/AboutColumn";
import ShareModal from "../section/SingleBlogPage/LeftSection/ShareModal";
import ShareModalHorizonatal from "../section/SingleBlogPage/LeftSection/ShareModalHorizonatal";
export default function SingleBlogPageLayout() {
  const { blogId } = useParams();
  const { blogsWithContent, fetchBlogsWithContent } =
    useContext(BlogClientContext);

  useEffect(() => {
    // Fetch blogs when the component mounts
    fetchBlogsWithContent(blogId);
  }, [blogId]);
  const { date, title, category, imageURL, blogContent } = blogsWithContent;

  console.log(date);

  return (
    <>
      <ShareModal />
      <div className="mx-auto mt-16 flex w-full items-start justify-start px-10 max-md:flex-col max-md:px-5 max-sm:px-0">
        <div className="min-w-[73vw] max-w-[73vw] border-r border-black pr-10 max-md:max-w-full max-md:border-none max-md:pr-0  2xl:max-w-[70vw]">
          <Hero
            title={title}
            date={date}
            category={category}
            imageURL={imageURL}
          />
          <ShareModalHorizonatal />
          <BlogMainContent content={blogContent?.content} />
        </div>
        <div className="pl-5">
          <AboutColumn />
        </div>
      </div>
    </>
  );
}
