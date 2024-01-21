import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import StoryModal from "../../Story/StoryModal";
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

  const [ShowStories, setShowStories] = useState(false);

  const openModal = () => {
    setShowStories(true);
  };

  return (
    <>
      <StoryModal setShowStories={setShowStories} ShowStories={ShowStories} />
      <div className="relative p-5 max-sm:px-0">
        <div className="mx-10 flex gap-5 overflow-hidden max-md:mx-0">
          <button
            onClick={() => handleScroll(-400)}
            className="absolute bottom-0  left-0 top-0 z-50 my-5 ml-2 rounded-md bg-white px-2 py-1 text-2xl text-black hover:bg-gray-100 focus:outline-none max-md:hidden"
          >
            <FaChevronLeft />
          </button>

          <div
            className="flex h-[400px] w-full flex-shrink-0 items-end justify-start gap-5 overflow-x-auto scroll-smooth bg-cover bg-center text-left transition-all duration-300 ease-in-out max-md:gap-2 2xl:h-[500px]"
            ref={scrollContainerRef}
          >
            <h1
              className="mx-10 h-full rotate-180 cursor-pointer text-center font-CooperHevitt text-4xl uppercase max-md:mx-2 max-md:ml-4 max-md:text-2xl"
              style={{ writingMode: "vertical-lr" }}
            >
              Trending Stories..
            </h1>
            {stories.map((story, index) => (
              <div
                key={index}
                className="relative flex h-[400px] w-full min-w-[300px] cursor-pointer items-end justify-start bg-gray-500 bg-cover bg-center text-left max-md:h-[350px] max-md:min-w-[250px] 2xl:h-[500px]"
                onClick={openModal}
                style={{
                  backgroundImage: `url("${story.imageUrl}")`,
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900"></div>
                <div className="absolute left-0 right-0 top-0 flex items-center justify-between">
                  <span className="tracki bg-violet-400 px-3 py-2 text-xs font-semibold uppercase text-gray-100">
                    {story.category}
                  </span>
                  <div className="mr-5 mt-3 flex flex-col justify-start text-center text-gray-100">
                    <span className="leadi tracki text-3xl font-semibold">
                      {story.date.day}
                    </span>
                    <span className="leadi uppercase">{story.date.month}</span>
                  </div>
                </div>
                <h2 className="z-10 p-5">
                  <span className="text-md font-montserrat font-medium text-gray-100 group-hover:underline">
                    {story.title}
                  </span>
                </h2>
              </div>
            ))}
            <h1
              className="mx-10 h-full cursor-pointer text-center font-CooperHevitt text-4xl uppercase"
              style={{ writingMode: "vertical-lr" }}
            >
              View More
            </h1>
          </div>

          <button
            onClick={() => handleScroll(400)}
            className="absolute bottom-0 right-0 top-0 my-5 mr-2 rounded-md bg-white px-2 py-1 text-2xl text-black hover:bg-gray-100 focus:outline-none max-md:hidden"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </>
  );
}
