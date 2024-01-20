import React, { useState, useEffect } from "react";
import Stories from "react-insta-stories";
import SeeMore from "./SeeMore";

export default function StorySlider() {
  const [isStoriesPaused, setIsStoriesPaused] = useState(true);

  const stories = [
    "https://images.pexels.com/photos/774861/pexels-photo-774861.jpeg?auto=compress&cs=tinysrgb&w=1000",
    {
      url: "https://images.pexels.com/photos/640809/pexels-photo-640809.jpeg?auto=compress&cs=tinysrgb&w=1000",
      duration: 5000,
      seeMore: SeeMore,
    },
    {
      url: "https://images.pexels.com/photos/640809/pexels-photo-640809.jpeg?auto=compress&cs=tinysrgb&w=1000",
      duration: 2000,
      seeMore: ({ close }) => {
        return <div onClick={close}>Hello, click to close this.</div>;
      },
    },
    {
      url: "https://images.pexels.com/photos/640809/pexels-photo-640809.jpeg?auto=compress&cs=tinysrgb&w=1000",
      duration: 5000,
      header: {
        // heading: "Mohit Karekar",
        subheading: "Posted 30m ago",
        profileImage:
          "https://images.pexels.com/photos/640809/pexels-photo-640809.jpeg?auto=compress&cs=tinysrgb&w=1000",
      },
    },
    {
      url: "https://images.pexels.com/photos/640809/pexels-photo-640809.jpeg?auto=compress&cs=tinysrgb&w=1000",
      duration: 2000,
      seeMore: ({ close }) => {
        return <div onClick={close}>Hello, click to close this.</div>;
      },
    },
    {
      url: "https://exit109.com/~dnn/clips/RW20seconds_1.mp4#t=.1",
      duration: 5000, // ignored
      type: "video",
    },
    {
      content: (props) => (
        <div style={{ background: "pink", padding: 20 }}>
          <h1 style={{ marginTop: "100%", marginBottom: 0 }}>🌝</h1>
          <h1 style={{ marginTop: 5 }}>A custom title can go here.</h1>
        </div>
      ),
    },
  ];

  const handleStoryStart = () => {
    // Callback when a story starts
    console.log("Story started");
  };

  const handleStoryEnd = () => {
    // Callback when a story ends
    console.log("Story ended");
  };

  const handleAllStoriesEnd = () => {
    // Callback when all stories have ended
    console.log("All stories ended");
    // You can close the modal or perform any other action here
  };

  useEffect(() => {
    // Set isStoriesPaused to false when the modal is opened
    setIsStoriesPaused(false);

    // Clean up and pause stories when the modal is closed
    return () => {
      setIsStoriesPaused(true);
    };
  }, []);

  return (
    <div className="h-screen w-full">
      <Stories
        stories={stories}
        height="100%"
        loop={false}
        defaultInterval={1500}
        isPaused={isStoriesPaused}
        onStoryStart={handleStoryStart}
        onStoryEnd={handleStoryEnd}
        onAllStoriesEnd={handleAllStoriesEnd}
        // Add other props as needed
      />
    </div>
  );
}
