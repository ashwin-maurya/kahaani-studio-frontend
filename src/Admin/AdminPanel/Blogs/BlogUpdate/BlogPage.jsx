import React, { useContext, useEffect } from "react";
import BlogContext from "../../AdminContexts/BlogContexts/BlogAdminContext";

export default function BlogPage() {
  const blogContext = useContext(BlogContext);

  useEffect(() => {
    // Fetch blogs when the component mounts
    blogContext.fetchBlogs();
    console.log(blogContext.blogs);
  }, []);

  return (
    <>
      <h1 className="text-center font-Gamiliademo text-4xl font-thin max-md:text-xl">
        Latest blogs
      </h1>
      <main className="flex w-full flex-wrap items-start justify-center px-10 py-10 max-md:flex-col max-md:px-6">
        {blogContext.blogs.map((blog, index) => (
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
                  src={blog.imageURL}
                  alt={blog.title}
                />
              </div>
              <div className="w-full pb-3 pt-2">
                <span className="font-Gamiliademo text-base  font-semibold uppercase tracking-wider text-black group-hover:text-yellow-700 ">
                  {blog.title}{" "}
                </span>
              </div>
            </div>
          </a>
        ))}
      </main>
    </>
  );
}
