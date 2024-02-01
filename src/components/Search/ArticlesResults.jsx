import React from "react";
import { useNavigate } from "react-router-dom";

export default function ArticlesResults({ articles }) {
  const navigate = useNavigate();

  return (
    <>
      <ul className="w-full text-gray-700">
        {articles.map((article) => (
          <li
            key={article._id}
            onClick={() =>
              navigate(
                `/articles/${article.title.toLowerCase().replace(/\s+/g, "-")}/${article?._id}`,
              )
            }
            className="flex w-full cursor-pointer justify-between rounded-sm px-2 py-1 hover:bg-gray-100"
          >
            <div className="flex flex-col">
              <span className="font-HankenGrotesk text-lg font-semibold">
                {article.title}
              </span>
            </div>
            <img
              src={article.imageURL}
              alt={article.title}
              className="h-8 rounded-sm object-cover"
            />
          </li>
        ))}
      </ul>
    </>
  );
}
