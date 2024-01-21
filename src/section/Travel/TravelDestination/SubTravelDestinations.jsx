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
  {
    id: 7,
    title: "Destination 4",
    link: "#",
    imageUrl: "https://picsum.photos/1024/768?image=1073",
  },
  {
    id: 8,
    title: "Destination 5",
    link: "#",
    imageUrl: "https://picsum.photos/1024/768?image=1032",
  },
  {
    id: 9,
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
      <div className="relative mx-10 mt-5 max-w-screen-xl pb-10 max-md:mt-5 max-sm:px-0">
        <div className="mx-10 flex items-center justify-center gap-5 overflow-hidden overflow-x-scroll max-md:mx-0">
          <button
            onClick={() => handleScroll(-400)}
            className="absolute left-0 z-50 h-full rounded-md bg-white px-2 py-1 text-2xl text-black hover:bg-stone-100 focus:outline-none max-md:hidden"
          >
            <FaChevronLeft />
          </button>

          <div
            className="flex max-h-[200px] w-full  items-center justify-start gap-5 overflow-x-scroll scroll-smooth bg-cover bg-center text-left  transition-all duration-300 ease-in-out max-md:max-h-[150px] max-md:gap-2 "
            ref={scrollContainerRef}
          >
            <h1
              className="mx-10 h-full rotate-180 cursor-pointer text-center font-CooperHevitt text-3xl uppercase max-md:mx-2 max-md:ml-4 max-md:text-2xl"
              style={{ writingMode: "vertical-lr" }}
            >
              More
            </h1>
            {travelDestinationsData.map((destination) => (
              <div className="relative flex w-full cursor-pointer flex-col items-end justify-start bg-cover bg-center text-left">
                <a
                  href={destination.link}
                  className="flex w-full flex-col items-center justify-center rounded-full text-center mix-blend-normal "
                >
                  <img
                    loading="lazy"
                    className="group h-[150px] w-[150px] min-w-[150px] scale-95 rounded-full bg-cover bg-no-repeat object-cover  object-center transition-all duration-500 ease-in-out group-hover:opacity-90 max-md:h-[100px] max-md:w-[100px] max-md:min-w-[100px]"
                    src={destination.imageUrl}
                  />
                  <span className="w-full text-center font-Oswald text-lg font-bold uppercase tracking-wider transition-all duration-500 ease-out max-md:text-xs">
                    {destination.title}
                  </span>
                </a>
              </div>
            ))}
          </div>
          <button
            onClick={() => handleScroll(400)}
            className="absolute right-0 z-50 h-full rounded-md bg-white px-2 py-1 text-2xl text-black hover:bg-stone-100 focus:outline-none max-md:hidden"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </>
  );
}
