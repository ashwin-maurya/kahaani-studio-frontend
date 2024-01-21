import React from "react";
import YoutubeLazyLoad from "./YoutubeLazyLoad";

export default function YoutubeContent() {
  const videos = [
    { id: 1, videoUrl: "OCzzN8VZgfY", altText: "Shikha Gautam" },
    { id: 2, videoUrl: "iBSbD_7bvE8", altText: "Shikha Gautam" },
    { id: 3, videoUrl: "s3G2kLruJJo", altText: "Shikha Gautam" },
    { id: 4, videoUrl: "kARJS7aG0_Q", altText: "Shikha Gautam" },
  ];

  return (
    <>
      <div className="2xl:max-w-screen-xl max-md:scale-[.9] scale-[.8] 2xl:scale-100 2xl:my-40 mx-auto  mt-20 max-sm:mt-5 mb-20">
        <h1 className="text-5xl mb-10 relative right-10 max-md:right-0 font-thin my-5 font-Oswald text-left">
          Latest Videos
        </h1>
        <div className="flex max-md:flex-col">
          <div className=" aspect-video  w-[75%] max-md:w-full max-md:mb-4">
            <YoutubeLazyLoad
              videoUrl={videos[0].videoUrl}
              altText={videos[0].altText}
            />
          </div>
          <div className="flex flex-col justify-between mx-5 max-md:mx-0 gap-3">
            {videos.slice(1).map((video) => (
              <div key={video.id} className=" aspect-video ">
                <YoutubeLazyLoad
                  videoUrl={video.videoUrl}
                  altText={video.altText}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
