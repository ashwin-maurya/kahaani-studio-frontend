import React, { useEffect, useRef, useState } from "react";
import Stories from "stories-react";
import { storyContentGroup } from "../../components/constants/constants";
import "stories-react/dist/index.css";

const StorySlider = ({ selectedStoryIndex, setSelectedStoryIndex }) => {
  const [currentStoryIndex, setCurrentStoryIndex] =
    useState(selectedStoryIndex);

  const nextStory = () => {
    // Check if the current story is the last one
    if (currentStoryIndex < storyContentGroup.length - 1) {
      setTimeout(() => {
        setCurrentStoryIndex((prevIndex) => prevIndex + 1);
      }, 0);
    } else {
      // If it's the last story, call setShowStories(true)
      setSelectedStoryIndex(null);
    }
  };

  const prevStory = () => {
    setCurrentStoryIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex,
    );
  };

  return (
    <>
      <button
        onClick={prevStory}
        className="fixed left-0 top-1/2  z-[9999999999999] -translate-y-1/2 transform bg-gray-950 p-5 text-white"
      >
        Previous
      </button>

      {storyContentGroup[currentStoryIndex] && (
        <Stories
          stories={storyContentGroup[currentStoryIndex]}
          width="56.25vh"
          height="100vh"
          onAllStoriesEnd={nextStory}
          className="fixed right-0 top-1/2"
          pauseStoryWhenInActiveWindow={true}
          // loop={true}
        />
      )}
      <button
        onClick={nextStory}
        className="fixed right-0 top-1/2 z-[9999999999999] -translate-y-1/2 transform bg-gray-950 p-5 text-white"
      >
        Next
      </button>
    </>
  );
};

export default StorySlider;
