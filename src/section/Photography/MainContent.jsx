import React, { useState } from "react";
import "./index.css";

const imageData = [
  {
    id: "img1",
    alt: "image 1",
    src: "https://images.pexels.com/photos/7919/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    id: "img2",
    alt: "image 2",
    src: "https://images.pexels.com/photos/774861/pexels-photo-774861.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    id: "img3",
    alt: "image 3",
    src: "https://images.pexels.com/photos/1367179/pexels-photo-1367179.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    id: "img4",
    alt: "image 4",
    src: "https://images.pexels.com/photos/1367105/pexels-photo-1367105.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    id: "img5",
    alt: "image 5",
    src: "https://images.pexels.com/photos/1292115/pexels-photo-1292115.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    id: "img6",
    alt: "image 6",
    src: "https://images.pexels.com/photos/794079/pexels-photo-794079.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    id: "img7",
    alt: "image 7",
    src: "https://images.pexels.com/photos/640809/pexels-photo-640809.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    id: "img8",
    alt: "image 8",
    src: "https://images.pexels.com/photos/1000559/pexels-photo-1000559.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    id: "img9",
    alt: "image 9",
    src: "https://images.pexels.com/photos/708921/pexels-photo-708921.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
];

export default function MainContent() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <h1 className="mt-40 text-center uppercase font-CooperHevitt font-thin text-4xl">
        Photo Gallery
      </h1>
      <div className="block w-full max-w-[1200px] columns-3 max-lg:columns-2 max-md:columns-1 gap-0 break-inside-avoid mx-10 mt-10 max-sm:mx-0 ">
        {imageData.map((image, index) => (
          <div
            className="group m-2 bg-black relative overflow-hidden "
            key={index}
          >
            <div
              className="bg-black "
              href={`#${image.id}`}
              onClick={() => openImage(image)}
            >
              <img
                className="w-full group-hover:scale-105 transition-all ease-in-out duration-200 group-hover:opacity-70"
                alt={image.alt}
                src={image.src}
              />
              <div className="absolute -top-10 left-0 group-hover:translate-y-10 transition-all ease-in-out duration-200 pb-5 pl-5">
                <h1 className="block text-white">{image.alt}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed left-0 top-0 bottom-0 w-full overflow-hidden   z-[999999999] backdrop-blur-sm "
          id={selectedImage.id}
        >
          <div className="zoom-wrapper__image relative h-full m-auto flex justify-center items-center">
            <img
              alt={selectedImage.alt}
              className=" max-h-[95vh]"
              src={selectedImage.src}
            />
          </div>
          <a
            className="text-5xl pr-10 absolute top-0 right-0 text-black"
            href="#"
            onClick={closeImage}
          >
            ×
          </a>
        </div>
      )}
    </>
  );
}
