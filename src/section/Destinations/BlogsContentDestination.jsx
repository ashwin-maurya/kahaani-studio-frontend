import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BlogClientContext from "../../Contexts/Blogs/BlogClientContext";
import { useParams } from "react-router-dom";

export default function BlogsContentDestination() {
  const { blogs, fetchBlogsByDestination } = useContext(BlogClientContext);
  const navigate = useNavigate();
  const { location } = useParams();

  useEffect(() => {
    // Fetch blogs when the component mounts
    fetchBlogsByDestination(location);
  }, []);

  return (
    <>
      <h1 className="text-center font-CooperHevitt text-4xl font-thin uppercase max-md:text-xl">
        Latest blogs
      </h1>
      <main className="flex w-full flex-wrap items-start justify-center px-10 py-10 max-md:flex-col max-md:px-6">
        {blogs.map((blog, index) => (
          <div
            className="group w-1/3 cursor-pointer rounded px-5 pb-5 max-md:w-full max-md:px-0"
            key={index}
            onClick={() =>
              navigate(
                `/blog/${blog.title.toLowerCase().replace(/\s+/g, "-")}/${blog?._id}`,
              )
            }
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
                <span className="line-clamp-2 px-2 font-Gamiliademo text-xl font-semibold tracking-wider text-black group-hover:text-yellow-700">
                  {blog.title}
                </span>
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}
