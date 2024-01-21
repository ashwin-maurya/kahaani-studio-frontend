import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const travelDestinationsData = [
  {
    id: 1,
    title: "Destination 1",
    link: "#",
    imageUrl: "https://picsum.photos/1024/768?image=1033",
  },
  {
    id: 2,
    title: "Destination 2",
    link: "#",
    imageUrl: "https://picsum.photos/1024/768?image=967",
  },
  {
    id: 3,
    title: "Destination 3",
    link: "#",
    imageUrl: "https://picsum.photos/1024/768?image=924",
  },
  {
    id: 4,
    title: "Destination 4",
    link: "#",
    imageUrl: "https://picsum.photos/1024/768?image=1073",
  },
  {
    id: 5,
    title: "Destination 5",
    link: "#",
    imageUrl: "https://picsum.photos/1024/768?image=1032",
  },
  {
    id: 6,
    title: "Destination 6",
    link: "#",
    imageUrl: "https://picsum.photos/1024/768?image=1080",
  },
];

export default function SubTravelDestinations() {
  const scrollContainerRef = useRef(null);

  const handleScroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <>
      <div className="max-w-screen-xl pb-10 max-sm:px-0 mx-auto relative mt-0 max-md:mt-0">
        <div className="flex gap-5 overflow-hidden mx-10 max-md:mx-0">
          <button
            onClick={() => handleScroll(-400)}
            className="absolute left-0  text-2xl top-0 bottom-0 ml-2 max-md:hidden text-black px-2 py-1 focus:outline-none z-50 bg-white hover:bg-stone-100 rounded-md my-5"
          >
            <FaChevronLeft />
          </button>

          <div
            className="flex items-center justify-start flex-shrink-0 gap-5 max-md:gap-2 w-full text-left bg-center bg-cover max-h-[200px]  overflow-x-auto scroll-smooth transition-all ease-in-out duration-300"
            ref={scrollContainerRef}
          >
            <h1
              className="text-3xl h-full max-md:text-2xl font-CooperHevitt uppercase mx-10 max-md:mx-2 max-md:ml-4 cursor-pointer text-center rotate-180"
              style={{ writingMode: "vertical-lr" }}
            >
              More
            </h1>
            {travelDestinationsData.map((destination) => (
              <div className="relative items-end justify-start w-full text-left bg-center bg-cover cursor-pointer flex flex-col">
                <a
                  href={destination.link}
                  className="w-full flex-col rounded-full flex justify-center items-center mix-blend-normal text-center "
                >
                  <img
                    className="group bg-no-repeat h-[150px] w-[150px] bg-cover  scale-95 object-cover object-center transition-all ease-in-out duration-500 group-hover:opacity-90 rounded-full"
                    src={destination.imageUrl}
                  />
                  <span className="text-lg text-center transition-all ease-out duration-500 font-bold tracking-wider font-Oswald uppercase w-full">
                    {destination.title}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => handleScroll(400)}
          className="absolute right-0 text-2xl max-md:hidden top-0 bottom-0 mr-2 text-black px-2 py-1 bg-white focus:outline-none hover:bg-stone-100 rounded-md my-5"
        >
          <FaChevronRight />
        </button>
      </div>
    </>
  );
}
