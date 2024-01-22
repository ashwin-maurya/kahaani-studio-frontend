import React, { useState } from "react";
import "./index.css";
import PhotoModal from "./PhotoModal";
const imageData = [
  {
    id: "img1",
    src: "https://images.pexels.com/photos/7919/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1000",
    location: "Kolkata",
    description: "A train ride from Kolkata to Howrah Bridge",
  },
  {
    id: "img2",
    src: "https://images.pexels.com/photos/774861/pexels-photo-774861.jpeg?auto=compress&cs=tinysrgb&w=1000",
    location: "Greenland",
    description: "Beautiful landscape with vibrant colors",
  },
  {
    id: "img3",
    src: "https://images.pexels.com/photos/1367179/pexels-photo-1367179.jpeg?auto=compress&cs=tinysrgb&w=1000",
    location: "Paris",
    description: "Eiffel Tower during sunset",
  },
  {
    id: "img4",
    src: "https://images.pexels.com/photos/1367105/pexels-photo-1367105.jpeg?auto=compress&cs=tinysrgb&w=1000",
    location: "Mountain Valley",
    description: "Scenic view of a mountain valley",
  },
  {
    id: "img5",
    src: "https://images.pexels.com/photos/1292115/pexels-photo-1292115.jpeg?auto=compress&cs=tinysrgb&w=1000",
    location: "Countryside",
    description: "Peaceful countryside with a river",
  },
  {
    id: "img6",
    src: "https://images.pexels.com/photos/794079/pexels-photo-794079.jpeg?auto=compress&cs=tinysrgb&w=1000",
    location: "Desert",
    description: "Sand dunes in a vast desert landscape",
  },
  {
    id: "img7",
    src: "https://images.pexels.com/photos/640809/pexels-photo-640809.jpeg?auto=compress&cs=tinysrgb&w=1000",
    location: "Cityscape",
    description: "City lights at night",
  },
  {
    id: "img8",
    src: "https://images.pexels.com/photos/1000559/pexels-photo-1000559.jpeg?auto=compress&cs=tinysrgb&w=1000",
    location: "Beach",
    description: "Sunny day at the beach",
  },
  {
    id: "img9",
    src: "https://images.pexels.com/photos/708921/pexels-photo-708921.jpeg?auto=compress&cs=tinysrgb&w=1000",
    location: "Forest",
    description: "Lush green forest scenery",
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
      <h1 className="text-center font-CooperHevitt text-4xl font-thin uppercase">
        Photo Gallery
      </h1>
      <div className="mt-10 block w-screen columns-3 break-inside-avoid gap-0 px-10 max-lg:columns-2 max-md:columns-2 max-md:px-0">
        {imageData.map((image, index) => (
          <div
            className="group relative m-2 my-4 cursor-pointer overflow-hidden bg-black max-md:m-1 max-md:my-2 "
            key={index}
          >
            <div
              className="bg-black "
              href={`#${image.id}`}
              onClick={() => openImage(image)}
            >
              <img
                loading="lazy"
                className="w-full transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:opacity-90"
                alt={image.description}
                src={image.src}
              />
              <div className="absolute left-0  top-0 bg-[#00000071] px-5 py-3 transition-all duration-300 ease-in-out max-md:px-2 max-md:py-1">
                <h1 className="block font-Oswald text-base uppercase tracking-wide text-white max-md:text-xs">
                  {image.location}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <PhotoModal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          imageData={imageData}
          closeImage={closeImage}
        />
      )}
    </>
  );
}
