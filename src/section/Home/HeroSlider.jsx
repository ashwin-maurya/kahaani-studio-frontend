import React, { useRef, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const stories = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/7919/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/774861/pexels-photo-774861.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/708921/pexels-photo-708921.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/640809/pexels-photo-640809.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
];

export default function HeroSlider({ onSliderClick }) {
  const scrollContainerRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(stories[0].imageUrl);

  const handleScroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollOffset;
    }
  };

  useEffect(() => {
    let intervalId;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        handleScroll(250); // Adjust the scrollOffset as needed
      }, 6000); // Adjust the interval (in milliseconds) as needed
    };

    const stopAutoScroll = () => {
      clearInterval(intervalId);
    };

    // Start auto-scrolling on mount
    startAutoScroll();

    // Stop auto-scrolling when component unmounts
    return () => {
      stopAutoScroll();
    };
  }, []);

  const handleContainerScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;

      // Check if we have reached the end
      if (scrollLeft + clientWidth === scrollWidth) {
        // Reset scroll position to the beginning
        scrollContainerRef.current.scrollLeft = 0;
      }
    }
  };

  const handleSliderClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    if (onSliderClick) {
      onSliderClick(imageUrl);
    }
  };
  const moveWrapRef = useRef(null);
  const project1Ref = useRef(null);

  useEffect(() => {
    const moveWrap = moveWrapRef.current;
    const project1 = project1Ref.current;

    if (!moveWrap || !project1) {
      return;
    }

    let mouseX = 0,
      mouseY = 0;

    const handleMouseMove = (e) => {
      const offset = moveWrap.getBoundingClientRect();
      mouseX = Math.min(
        e.pageX - offset.left,
        offset.width - project1.offsetWidth
      );
      mouseY = Math.min(
        e.pageY - offset.top,
        offset.height - project1.offsetHeight
      );

      if (mouseX < 0) mouseX = 0;
      if (mouseY < 0) mouseY = 0;
    };

    const handleMouseEnter = () => {
      project1.style.display = "block";
    };

    const handleMouseLeave = () => {
      project1.style.display = "none";
    };

    document.addEventListener("mousemove", handleMouseMove);
    moveWrap.addEventListener("mouseenter", handleMouseEnter);
    moveWrap.addEventListener("mouseleave", handleMouseLeave);

    let xp = 0,
      yp = 0;

    const loop = () => {
      xp += (mouseX - xp) / 10;
      yp += (mouseY - yp) / 10;
      project1.style.left = xp - 30 + "px";
      project1.style.top = yp - 30 + "px";
      requestAnimationFrame(loop);
    };

    loop();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      moveWrap.removeEventListener("mouseenter", handleMouseEnter);
      moveWrap.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const openModal = () => {
    console.log("hello");
  };
  return (
    <>
      <div
        className="p-5 mx-auto relative mt-20"
        onScroll={handleContainerScroll}
      >
        {" "}
        <div className="flex gap-5 overflow-hidden mx-5">
          <button
            onClick={() => handleScroll(-250)}
            className="absolute left-0 text-2xl top-0 bottom-0 mr-2 text-white px-2 py-1 focus:outline-none z-50 "
          >
            <FaChevronLeft />
          </button>

          <div
            className="flex items-end justify-start flex-shrink-0 gap-2 w-[400px] text-left bg-center bg-cover h-[150px] overflow-x-auto scroll-smooth overflow-y-hidden transition-all ease-in-out duration-300 "
            ref={scrollContainerRef}
          >
            {stories.map((story, index) => (
              <div
                key={index}
                className="relative flex min-w-[250px] items-end justify-start w-full text-left bg-center bg-cover h-[150px] bg-gray-500 rounded-md group"
                style={{
                  backgroundImage: `url("${story.imageUrl}")`,
                }}
                ref={moveWrapRef}
                onClick={() => handleSliderClick(story.imageUrl)}
              >
                <span
                  id="project1"
                  ref={project1Ref}
                  className="absolute transition-all z-[999999] duration-0 text-white opacity-80  backdrop-blur-sm  bg-black p-5 rounded-full  cursor-pointer"
                  style={{ display: "none" }}
                  onClick={openModal}
                >
                  <span className="backdrop-blur-sm text-xs">View</span>
                </span>
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-[#00000090] to-[#00000057] rounded-md"></div>
              </div>
            ))}
          </div>

          <button
            onClick={() => handleScroll(250)}
            className="absolute right-0 text-2xl top-0 bottom-0 ml-2 text-white px-2 py-1 focus:outline-none"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </>
  );
}
