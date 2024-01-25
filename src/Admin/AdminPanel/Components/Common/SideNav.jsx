import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function () {
  return (
    <>
      <div className="sticky top-0 flex h-screen w-72 min-w-72 max-w-72 select-none flex-col border-r-2 border-black bg-stone-100">
        <aside className="h-full w-full p-6">
          <div className="flex items-center justify-between  font-HankenGrotesk font-bold  text-gray-600 ">
            <h2>Dashboard</h2>
            <FaBars className="text-2xl" />
          </div>
          <nav className="mt-5 text-sm">
            <div className="space-y-2">
              <h2 className="mt-5 font-VulturaRegular text-sm font-semibold uppercase dark:text-gray-400">
                <Link
                  className="flex items-center rounded-md p-2 font-HankenGrotesk font-bold text-gray-600 hover:bg-white"
                  rel="noopener noreferrer"
                  to="/admin"
                >
                  Home
                </Link>{" "}
              </h2>
            </div>
            <div className="space-y-2">
              <h2 className="mt-5 font-VulturaRegular text-sm font-semibold uppercase dark:text-gray-400">
                Gallery
              </h2>
              <div className="flex flex-col ">
                <Link
                  className="flex items-center rounded-md p-2 font-HankenGrotesk font-bold text-gray-600 hover:bg-white"
                  rel="noopener noreferrer"
                  to="/admin/gallery/addimage"
                >
                  Add Image
                </Link>
                <Link
                  className="flex items-center rounded-md p-2  font-HankenGrotesk font-bold text-gray-600 hover:bg-white"
                  rel="noopener noreferrer"
                  to="/admin/gallery/updateimage"
                >
                  Update Image
                </Link>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="mt-5  font-VulturaRegular text-sm font-semibold uppercase dark:text-gray-400">
                Blogs
              </h2>
              <div className="flex flex-col ">
                <Link
                  className="flex items-center rounded-md p-2 font-HankenGrotesk font-bold  text-gray-600 hover:bg-white"
                  rel="noopener noreferrer"
                  to="/admin/blogs/addblog"
                >
                  Add Blog
                </Link>
                <Link
                  className="flex items-center rounded-md p-2 font-HankenGrotesk font-bold  text-gray-600 hover:bg-white"
                  rel="noopener noreferrer"
                  to="/admin/blogs/updateblog"
                >
                  Update Blog
                </Link>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="mt-5 font-VulturaRegular text-sm font-semibold uppercase dark:text-gray-400">
                Articles
              </h2>
              <div className="flex flex-col ">
                <Link
                  className="flex items-center rounded-md p-2 font-HankenGrotesk font-bold  text-gray-600 hover:bg-white"
                  rel="noopener noreferrer"
                  to="/admin/articles/addarticle"
                >
                  Add Articles
                </Link>
                <Link
                  className="flex items-center rounded-md p-2 font-HankenGrotesk font-bold  text-gray-600 hover:bg-white"
                  rel="noopener noreferrer"
                  to="/admin/articles/updatearticle"
                >
                  Update Articles
                </Link>
              </div>
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
}
