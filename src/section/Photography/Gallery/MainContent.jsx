import React, { useState, useEffect, useContext } from "react";
import "./index.css";
import PhotoModal from "./PhotoModal";
import GalleryClientContext from "../../../Contexts/Gallery/GalleryClientContext";
import GallerySkeleton from "./GallerySkeleton";

export default function MainContent() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState([]);
  const { images, fetchImages } = useContext(GalleryClientContext);

  useEffect(() => {
    // Fetch images when the component mounts
    fetchImages();
  }, []);

  const handleImageLoad = (imageId) => {
    // Mark the image as loaded
    setLoadedImages((prevLoadedImages) => [...prevLoadedImages, imageId]);
  };

  // if (!images || images.length === 0) {
  //   // Render a loading state or return null
  //   return <GallerySkeleton />;
  // }

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
      <div className="mt-10 block w-full columns-3 break-inside-avoid gap-0 px-10 max-lg:columns-2 max-md:columns-2 max-md:px-0">
        {images.map((image, index) => (
          <div
            className="group relative m-2 my-4 cursor-pointer overflow-hidden bg-gray-200 max-md:m-1 max-md:my-2 "
            key={index}
          >
            <div
              className="bg-gray-200 "
              href={`#${image._id}`}
              onClick={() => openImage(image)}
            >
              <img
                loading="lazy"
                className="w-full transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:opacity-90"
                alt={image.imgDescription}
                src={image.imageURL}
                onLoad={() => handleImageLoad(image._id)}
              />
              {loadedImages.includes(image._id) || (
                <div className="skeleton-loader">
                  <div className="m-2 min-h-[300px] w-auto animate-pulse rounded-sm bg-gray-200"></div>
                </div>
              )}
              <div className="absolute left-0  top-0 bg-[#00000071] px-5 py-3 transition-all duration-300 ease-in-out max-md:px-2 max-md:py-1">
                <h1 className="block font-Oswald text-base uppercase tracking-wide text-white max-md:text-xs">
                  {image.imageLocation}
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
          imageData={images} // Pass the entire images array to the PhotoModal
          closeImage={closeImage}
        />
      )}
    </>
  );
}
