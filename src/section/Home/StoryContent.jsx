import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import StoryModal from "../Story/StoryModal";
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
      <div className="max-w-screen-xl p-5 max-sm:px-0 mx-auto relative mt-40 max-md:mt-0">
        <div className="flex gap-5 overflow-hidden mx-10 max-md:mx-0">
          <button
            onClick={() => handleScroll(-400)}
            className="absolute left-0  text-2xl top-0 bottom-0 ml-2 max-md:hidden text-black px-2 py-1 focus:outline-none z-50 bg-white hover:bg-stone-100 rounded-md my-5"
          >
            <FaChevronLeft />
          </button>

          <div
            className="flex items-end justify-start flex-shrink-0 gap-5 max-md:gap-2 w-full text-left bg-center bg-cover h-[400px] overflow-x-auto scroll-smooth transition-all ease-in-out duration-300"
            ref={scrollContainerRef}
          >
            <h1
              className="text-4xl max-md:text-2xl font-CooperHevitt uppercase mx-10 max-md:mx-2 max-md:ml-4 h-full cursor-pointer text-center rotate-180"
              style={{ writingMode: "vertical-lr" }}
            >
              Trending Stories
            </h1>
            {stories.map((story, index) => (
              <div
                key={index}
                className="relative flex min-w-[300px] items-end justify-start w-full text-left bg-center bg-cover h-[400px] cursor-pointer max-md:h-[350px] max-md:min-w-[250px] bg-gray-500"
                onClick={openModal}
                style={{
                  backgroundImage: `url("${story.imageUrl}")`,
                }}
              >
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
                <div className="absolute top-0 left-0 right-0 flex items-center justify-between">
                  <span className="px-3 py-2 text-xs font-semibold tracki uppercase text-gray-100 bg-violet-400">
                    {story.category}
                  </span>
                  <div className="flex flex-col justify-start text-center mr-5 mt-3 text-gray-100">
                    <span className="text-3xl font-semibold leadi tracki">
                      {story.date.day}
                    </span>
                    <span className="leadi uppercase">{story.date.month}</span>
                  </div>
                </div>
                <h2 className="z-10 p-5">
                  <span className="font-medium font-montserrat text-md group-hover:underline text-gray-100">
                    {story.title}
                  </span>
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
            onClick={() => handleScroll(400)}
            className="absolute right-0 text-2xl max-md:hidden top-0 bottom-0 mr-2 text-black px-2 py-1 focus:outline-none bg-white hover:bg-stone-100 rounded-md my-5"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </>
  );
}
