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
      <h1 className="pt-40 text-center uppercase font-CooperHevitt font-thin text-4xl">
        Photo Gallery
      </h1>
      <div className="block w-screen columns-3 max-lg:columns-2 max-md:columns-2 gap-0 break-inside-avoid px-10 mt-10 max-md:px-0">
        {imageData.map((image, index) => (
          <div
            className="group m-2 my-4 max-md:m-1 max-md:my-2 cursor-pointer bg-black relative overflow-hidden "
            key={index}
          >
            <div
              className="bg-black "
              href={`#${image.id}`}
              onClick={() => openImage(image)}
            >
              <img
                className="w-full group-hover:scale-105 transition-all ease-in-out duration-500 group-hover:opacity-90"
                alt={image.description}
                src={image.src}
              />
              <div className="absolute bg-[#00000071]  left-0 top-0 transition-all ease-in-out duration-300 py-3 max-md:py-1 px-5 max-md:px-2">
                <h1 className="block max-md:text-xs text-white uppercase font-Oswald">
                  {image.location}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <PhotoModal selectedImage={selectedImage} closeImage={closeImage} />
      )}
    </>
  );
}
