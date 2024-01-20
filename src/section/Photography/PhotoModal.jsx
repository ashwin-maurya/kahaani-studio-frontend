import React, { useRef, useEffect, useState } from "react";
import { FaTimes, FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function PhotoModal({
  selectedImage,
  closeImage,
  imageData,
  setSelectedImage,
}) {
  const modalRef = useRef(null);
  const imageRef = useRef(null);
  const descriptionRef = useRef(null);
  const [zoomed, setZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);
  const handleOutsideClick = (event) => {
    if (modalRef.current === event.target) {
      closeImage();
    }
  };

  const handleImageClick = (event) => {
    const rect = imageRef.current.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const percentX = (mouseX / rect.width) * 100;
    const percentY = (mouseY / rect.height) * 100;

    setZoomPosition({ x: percentX, y: percentY });
    setZoomed((prevZoomed) => !prevZoomed);
  };

  const getTransformOrigin = () => {
    return `${zoomPosition.x}% ${zoomPosition.y}%`;
  };

  const navigateImage = (direction) => {
    const currentIndex = imageData.findIndex(
      (image) => image.id === selectedImage.id
    );
    let nextIndex;

    if (direction === "left") {
      nextIndex = (currentIndex - 1 + imageData.length) % imageData.length;
    } else {
      nextIndex = (currentIndex + 1) % imageData.length;
    }

    setSelectedImage(imageData[nextIndex]);
  };
  return (
    <>
      <div
        id="myModal"
        className={`fixed inset-0 flex items-center transition-all z-[99999999999] ease-in-out duration-300 justify-center backdrop-blur-sm bg-Opacityblack select-none bg-[#00000052]`}
        ref={modalRef}
        onClick={handleOutsideClick}
      >
        <div
          className="overflow-hidden z-[999999999] backdrop-blur-sm "
          id={selectedImage.id}
        >
          <div className="zoom-wrapper__image  group shadow-lg relative h-full m-auto flex justify-center items-center">
            <img
              ref={imageRef}
              className={`max-h-[95vh] transform transition-transform ease duration-300 ${
                zoomed ? "scale-[2]  cursor-zoom-out" : " cursor-zoom-in "
              }`}
              alt={selectedImage.description}
              src={selectedImage.src}
              onClick={handleImageClick}
              style={{
                transformOrigin: getTransformOrigin(),
              }}
            />
            <span
              className="text-xl max-md:text-lg -translate-y-10 max-md:translate-y-0 group-hover:translate-y-0 text-white absolute top-0 right-0 bg-gray-600 p-2 hover:scale-95 transition-all ease-in-out duration-500 cursor-pointer"
              onClick={closeImage}
            >
              <FaTimes />
            </span>
            <span
              className={`text-xl w-full opacity-0  max-md:opacity-100 group-hover:opacity-100 text-white absolute bottom-0 right-0 bg-[#00000071] p-2 max-sm:p-1 transition-all ease-in-out duration-500`}
            >
              <h1 className="font-Oswald text-base max-sm:text-xs">
                {selectedImage.location}
              </h1>
              <p className="font-Authorfont text-sm max-sm:text-[10px]">
                {selectedImage.description}
              </p>
            </span>
          </div>
        </div>
        <div
          className="absolute max-md:bottom-0 bg-[#00000086] py-10 left-0 flex items-center transform -translate-y-2/2 cursor-pointer"
          onClick={() => navigateImage("left")}
        >
          <button className="text-white text-2xl p-2 cursor-pointer">
            <FaChevronLeft />
          </button>
        </div>
        <div
          className="absolute max-md:bottom-0 bg-[#00000086] py-10 right-0 flex items-center transform -translate-y-1/1 cursor-pointer"
          onClick={() => navigateImage("right")}
        >
          <button className="text-white text-2xl p-2 cursor-pointer">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </>
  );
}
