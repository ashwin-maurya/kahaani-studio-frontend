import React, { useEffect } from "react";
import DestinationResults from "./DestinationResults";
import ArticlesResults from "./ArticlesResults";
import BlogResults from "./BlogResults";

export default function SearchDropDown({ searchResult }) {
  useEffect(() => {
    console.log(searchResult);
  }, [searchResult]);

  const { blogs, articles, destinations } = searchResult;

  return (
    <>
      <div
        id="dropdownAvatarName"
        className="dark:bg-darkBgPrimary absolute left-6 top-16 z-50 block w-[200%] max-w-[700px] divide-y divide-gray-100 rounded-lg border bg-white shadow-2xl"
      >
        {!destinations.length && !blogs.length && !articles.length ? (
          <div className="my-2">
            <h1 className="mx-3 font-CooperHevitt">No results found</h1>
          </div>
        ) : (
          <div className="max-h-[500px] overflow-y-auto px-4 py-4">
            {destinations?.length > 0 && (
              <div className="mt-2">
                <h1 className="text-primaryMain font-CooperHevitt text-sm">
                  Destination:
                </h1>
                <div className="flex overflow-y-auto">
                  <DestinationResults destinations={destinations} />
                </div>
              </div>
            )}
            {blogs?.length > 0 && (
              <div className="mt-2">
                <h1 className="text-primaryMain font-CooperHevitt text-sm">
                  Blogs
                </h1>
                <div className="max-h-[500px] overflow-y-auto">
                  <BlogResults blogs={blogs} />
                </div>
              </div>
            )}

            {articles?.length > 0 && (
              <div className="mt-2">
                <h1 className="text-primaryMain font-CooperHevitt text-sm">
                  Articles
                </h1>
                <div className="max-h-[500px] overflow-y-auto">
                  <ArticlesResults articles={articles} />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
