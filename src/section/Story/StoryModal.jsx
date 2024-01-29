// StoryModal.jsx

import React, { useEffect, useRef } from "react";
import StorySlider from "./StorySlider";

const StoryModal = ({ selectedStoryIndex, setSelectedStoryIndex }) => {
  const modalRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (modalRef.current === event.target) {
      setSelectedStoryIndex(null);
    }
  };

  useEffect(() => {
    if (selectedStoryIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedStoryIndex]);

  return (
    <>
      <div
        id="myModal"
        className={`${
          selectedStoryIndex !== null
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        } bg-Opacityblack fixed inset-0 z-[99999999999] flex  select-none items-center justify-center backdrop-blur-sm transition-all duration-300 ease-in-out `}
        ref={modalRef}
        onClick={handleOutsideClick}
      >
        <div className="bg- flex h-screen items-center justify-center overflow-hidden rounded-lg shadow-xl max-lg:w-[100%]">
          {selectedStoryIndex !== null && (
            <StorySlider
              setSelectedStoryIndex={setSelectedStoryIndex}
              selectedStoryIndex={selectedStoryIndex}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default StoryModal;
