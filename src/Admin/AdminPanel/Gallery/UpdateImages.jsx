import React, { useContext, useEffect } from "react";
import GalleryContext from "../AdminContexts/GalleryContexts/GalleryContext";

export default function UpdateImages() {
  const galleryContext = useContext(GalleryContext);

  useEffect(() => {
    galleryContext.fetchImages();
  }, []);

  return (
    <>
      <div className="mt-16 flex flex-col">
        <h1 className="break-words text-center font-Gamiliademo text-2xl font-bold uppercase">
          Your Photo Gallery
        </h1>
        <div className="mt-10 block w-full columns-3 break-inside-avoid gap-0 px-10 max-lg:columns-2 max-md:columns-2 max-md:px-0">
          {" "}
          {galleryContext.images.map((image, index) => (
            <div
              className="group relative m-2 my-4  cursor-pointer overflow-hidden bg-stone-100 max-md:m-1 max-md:my-2 "
              key={index}
            >
              <div className="w-full ">
                <img
                  className="max-h-[400px] w-full object-cover object-center"
                  src={image.imageURL}
                  alt=""
                />
              </div>
              <div className="p-2 px-5">
                <h1 className="font-Oswald text-xl">{image.imageLocation}</h1>
                <p className="font-CooperHevitt text-base">
                  {image.imgDescription}
                </p>
                <div className="flex w-full justify-evenly gap-5 py-2">
                  <button className="inline-block w-full rounded-md  bg-black px-4 py-2 font-medium text-white ">
                    Delete
                  </button>
                  <button className="inline-block w-full rounded-md  bg-black px-4 py-2 font-medium text-white ">
                    Update
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
