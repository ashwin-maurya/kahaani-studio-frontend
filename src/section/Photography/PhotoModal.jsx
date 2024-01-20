import React, { useRef, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function PhotoModal({ selectedImage, closeImage }) {
  const modalRef = useRef(null);
  const imageRef = useRef(null);
  const descriptionRef = useRef(null);
  const [zoomed, setZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

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

  return (
    <>
      <div
        id="myModal"
        className={`fixed inset-0 flex items-center transition-all z-[99999999999] ease-in-out duration-300 justify-center backdrop-blur-sm bg-Opacityblack select-none `}
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
              className="text-xl -translate-y-10 group-hover:translate-y-0 text-white absolute top-0 right-0 bg-gray-600 p-2 hover:scale-95 transition-all ease-in-out duration-500 cursor-pointer"
              onClick={closeImage}
            >
              <FaTimes />
            </span>
            <span
              className={`text-xl w-full opacity-0 group-hover:opacity-100 text-white absolute bottom-0 right-0 bg-[#00000071] p-2 transition-all ease-in-out duration-500`}
            >
              <h1 className="font-Oswald text-base">
                {selectedImage.location}
              </h1>
              <p className="font-Authorfont text-sm">
                {selectedImage.description}
              </p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
