import React, { useRef } from "react";
import { FaTimes } from "react-icons/fa";

export default function PhotoModal({ selectedImage, closeImage }) {
  const modalRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (modalRef.current === event.target) {
      console.log("clicked");
      closeImage();
    }
  };
  return (
    <>
      <div
        id="myModal"
        className={`fixed inset-0 flex items-center transition-all  z-[99999999999] ease-in-out duration-300 justify-center backdrop-blur-sm bg-Opacityblack select-none `}
        ref={modalRef}
        onClick={handleOutsideClick}
      >
        <div
          className="overflow-hidden  z-[999999999] backdrop-blur-sm "
          id={selectedImage.id}
        >
          <div className="zoom-wrapper__image  group shadow-lg relative h-full m-auto flex justify-center items-center">
            <img
              alt={selectedImage.alt}
              className=" max-h-[95vh]"
              src={selectedImage.src}
            />
            <span
              className="text-xl -translate-y-10 group-hover:translate-y-0 text-white absolute top-0 right-0 bg-gray-600 p-2 hover:scale-95 transition-all ease-in-out duration-500 cursor-pointer"
              onClick={closeImage}
            >
              <FaTimes />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
