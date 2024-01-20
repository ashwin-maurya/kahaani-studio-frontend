import React from "react";

export default function YoutubeContent() {
  return (
    <>
      <div className="2xl:max-w-screen-xl scale-[.8] 2xl:scale-100 2xl:my-40 mx-auto  mt-20 mb-20">
        <h1 className="text-5xl mb-10 relative right-10 font-thin my-5 font-Oswald text-left">
          Latest Videos
        </h1>
        <div className="flex">
          <div className=" aspect-video  w-[75%] ">
            <iframe
              className=" h-full w-full rounded-lg"
              src="https://www.youtube.com/embed?listType=playlist&list=UUP0GR0mjnwR6XPCI7vaW-vA"
              width="100%"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="flex flex-col justify-between mx-5 gap-3">
            <div className=" aspect-video ">
              <iframe
                className=" h-full w-full rounded-lg"
                src="https://www.youtube.com/embed?listType=playlist&list=UUP0GR0mjnwR6XPCI7vaW-vA&index=2"
                width="100%"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className=" aspect-video ">
              <iframe
                className=" h-full w-full rounded-lg"
                src="https://www.youtube.com/embed?listType=playlist&list=UUP0GR0mjnwR6XPCI7vaW-vA&index=3"
                width="100%"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>

            <div className=" aspect-video ">
              <iframe
                className=" h-full w-full rounded-lg"
                src="https://www.youtube.com/embed?listType=playlist&list=UUP0GR0mjnwR6XPCI7vaW-vA&index=4"
                width="100%"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
