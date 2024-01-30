import React, { useEffect, useRef, useState } from "react";
import Stories from "stories-react";
import { storyContentGroup } from "../../components/constants/constants";
import "stories-react/dist/index.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const StorySlider = () => {
  const { storyId } = useParams();
  const navigate = useNavigate();
  const [currentStoryIndex, setCurrentStoryIndex] = useState(storyId);

  useEffect(() => {
    setCurrentStoryIndex(storyId);
  }, [storyId]);

  const nextStory = () => {
    if (currentStoryIndex < storyContentGroup.length - 1) {
      navigate(`/story/${parseInt(currentStoryIndex) + 1}`);
    } else {
      navigate(`/home`);
    }
  };

  const prevStory = () => {
    if (currentStoryIndex > 0) {
      navigate(`/story/${parseInt(currentStoryIndex) - 1}`);
    } else {
      // Handle case when there is no previous story
    }
  };

  return (
    <>
      <button
        onClick={prevStory}
        className="fixed left-0 top-1/2  z-[9999999999999] -translate-y-1/2 transform bg-gray-100 p-5 text-black"
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
        className="fixed right-0 top-1/2 z-[9999999999999] -translate-y-1/2 transform bg-gray-100 p-5 text-black"
      >
        Next
      </button>
    </>
  );
};

export default StorySlider;
