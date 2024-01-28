import React, { useContext, useEffect } from "react";
import ArticleAdminContext from "../../AdminContexts/ArticleContexts/ArticleAdminContext";

export default function ArticlePage() {
  const articleAdminContext = useContext(ArticleAdminContext);

  useEffect(() => {
    // Fetch blogs when the component mounts
    articleAdminContext.fetchArticle();
    console.log(articleAdminContext.articles);
  }, []);

  return (
    <>
      <h1 className="text-center font-Gamiliademo text-4xl font-thin max-md:text-xl">
        Latest Articles
      </h1>
      <main className="flex w-full flex-wrap items-start justify-center px-10 py-10 max-md:flex-col max-md:px-6">
        {articleAdminContext?.articles?.map((article, index) => (
          <a
            key={index}
            href="#"
            className="group w-1/3 rounded px-5 pb-5 max-md:w-full max-md:px-0"
          >
            <div className="">
              <div className="h-full w-full">
                <img
                  loading="lazy"
                  className="max-h-[200px] min-h-[200px] w-full rounded-t object-cover"
                  src={article?.imageURL}
                  alt={article?.title}
                />
              </div>
              <div className="w-full pb-3 pt-2">
                <span className="font-Gamiliademo text-xl font-semibold uppercase tracking-wider text-black group-hover:text-yellow-700">
                  {article?.title}{" "}
                </span>
              </div>
            </div>
          </a>
        ))}
      </main>
    </>
  );
}
