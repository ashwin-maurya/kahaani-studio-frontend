import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const stories = [
  {
    category: "Politics",
    date: {
      day: "04",
      month: "Aug",
    },
    imageUrl: "https://source.unsplash.com/random/240x320",
    title: "Autem sunt tempora mollitia magnam non voluptates",
  },
  {
    category: "Health",
    date: {
      day: "01",
      month: "Aug",
    },
    imageUrl: "https://source.unsplash.com/random/241x320",
    title: "Inventore reiciendis aliquam excepturi",
  },
  {
    category: "Science",
    date: {
      day: "28",
      month: "Jul",
    },
    imageUrl: "https://source.unsplash.com/random/242x320",
    title: "Officiis mollitia dignissimos commodi optio vero animi",
  },
  {
    category: "Sports",
    date: {
      day: "19",
      month: "Jul",
    },
    imageUrl: "https://source.unsplash.com/random/243x320",
    title: "Doloribus sit illo necessitatibus architecto exercitationem enim",
  },
  {
    category: "Sports",
    date: {
      day: "19",
      month: "Jul",
    },
    imageUrl: "https://source.unsplash.com/random/243x320",
    title: "Doloribus sit illo necessitatibus architecto exercitationem enim",
  },
  {
    category: "Sports",
    date: {
      day: "19",
      month: "Jul",
    },
    imageUrl: "https://source.unsplash.com/random/243x320",
    title: "Doloribus sit illo necessitatibus architecto exercitationem enim",
  },
];

export default function StoryContent() {
  const scrollContainerRef = useRef(null);

  const handleScroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollOffset;
    }
  };
  return (
    <>
      <div className="max-w-screen-xl p-5 mx-auto relative mt-20">
        <div className="flex gap-5 overflow-hidden mx-10">
          <button
            onClick={() => handleScroll(-200)}
            className="absolute left-0  text-2xl top-0 bottom-0 ml-2 text-black rounded-full px-2 py-1 focus:outline-none z-50 bg-white"
          >
            <FaChevronLeft />
          </button>

          <div
            className="flex items-end justify-start flex-shrink-0 gap-5 w-full text-left bg-center bg-cover h-[400px] overflow-x-auto scroll-smooth transition-all ease-in-out duration-300"
            ref={scrollContainerRef}
          >
            <h1
              className="text-4xl font-CooperHevitt uppercase mx-10 h-full cursor-pointer text-center rotate-180"
              style={{ writingMode: "vertical-lr" }}
            >
              Trending Stories
            </h1>
            {stories.map((story, index) => (
              <div
                key={index}
                className="relative flex min-w-[300px] items-end justify-start w-full text-left bg-center bg-cover h-[400px] bg-gray-500"
                style={{
                  backgroundImage: `url("${story.imageUrl}")`,
                }}
              >
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
                <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-3 py-2 text-xs font-semibold tracki uppercase text-gray-100 bg-violet-400"
                  >
                    {story.category}
                  </a>
                  <div className="flex flex-col justify-start text-center text-gray-100">
                    <span className="text-3xl font-semibold leadi tracki">
                      {story.date.day}
                    </span>
                    <span className="leadi uppercase">{story.date.month}</span>
                  </div>
                </div>
                <h2 className="z-10 p-5">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="font-medium text-md group-hover:underline text-gray-100"
                  >
                    {story.title}
                  </a>
                </h2>
              </div>
            ))}
            <h1
              className="text-4xl font-CooperHevitt uppercase mx-10 h-full text-center cursor-pointer"
              style={{ writingMode: "vertical-lr" }}
            >
              View More
            </h1>
          </div>

          <button
            onClick={() => handleScroll(200)}
            className="absolute right-0 text-2xl top-0 bottom-0 mr-2 text-black rounded-full px-2 py-1 focus:outline-none"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </>
  );
}
