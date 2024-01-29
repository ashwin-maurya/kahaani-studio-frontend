import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import StorySlider from "./StorySlider";

const StoryModal = () => {
  const modalRef = useRef(null);
  const { storyId } = useParams();

  const handleOutsideClick = (event) => {
    if (modalRef.current === event.target) {
      // Clear the storyId when clicking outside the modal
      Navigate(`/`);
    }
  };

  useEffect(() => {
    if (storyId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [storyId]);

  return (
    <>
      <div
        id="myModal"
        className={`${
          storyId ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } bg-Opacityblack fixed inset-0 z-[99999999999] flex  select-none items-center justify-center          bg-[#000000cb] backdrop-blur-sm transition-all duration-300 ease-in-out`}
        ref={modalRef}
        onClick={handleOutsideClick}
      >
        <div className="bg- flex h-screen items-center justify-center overflow-hidden rounded-lg shadow-xl max-lg:w-[100%]">
          {storyId && <StorySlider />}
        </div>
      </div>
    </>
  );
};

export default StoryModal;
