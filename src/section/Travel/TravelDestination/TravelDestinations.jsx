import React from "react";
import SubTravelDestinations from "./SubTravelDestinations";
const travelDestinationsData = [
  {
    id: 1,
    title: "Destination 1",
    link: "#",
    imageUrl: "https://picsum.photos/1024/768?image=1033",
  },
  {
    id: 2,
    title: "Destination 2",
    link: "#",
    imageUrl: "https://picsum.photos/1024/768?image=967",
  },
  {
    id: 3,
    title: "Destination 3",
    link: "#",
    imageUrl: "https://picsum.photos/1024/768?image=924",
  },
  {
    id: 4,
    title: "Destination 4",
    link: "#",
    imageUrl: "https://picsum.photos/1024/768?image=1073",
  },
  {
    id: 5,
    title: "Destination 5",
    link: "#",
    imageUrl: "https://picsum.photos/1024/768?image=1032",
  },
  {
    id: 6,
    title: "Destination 6",
    link: "#",
    imageUrl: "https://picsum.photos/1024/768?image=1080",
  },
];

export default function TravelDestinations() {
  return (
    <>
      <h1 className="text-center uppercase font-CooperHevitt font-thin text-4xl">
        FEATURED DESTINATIONS
      </h1>
      <div className="pt-5 pb-5 w-full px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-md:px-0 mx-auto">
        {travelDestinationsData.map((destination) => (
          <div className="relative overflow-hidden">
            <div
              key={destination.id}
              className={`group bg-no-repeat max-h-[300px] min-h-[300px] bg-cover`}
            >
              <a
                href={destination.link}
                className="w-full h-full flex justify-center items-center mix-blend-normal text-center "
              >
                <img
                  className="w-full scale-95 object-cover object-center transition-all ease-in-out duration-500 group-hover:opacity-90"
                  src={destination.imageUrl}
                />
                <div className="absolute flex text-white flex-wrap items-center justify-center h-auto m-0 p-5 w-full">
                  <span className="bg-[#00000082] text-xl transition-all ease-out duration-500 font-bold tracking-wider font-Oswald px-10 group-hover:px-16 py-5 group-hover:py-8 uppercase">
                    {destination.title}
                  </span>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
      <SubTravelDestinations />
    </>
  );
}
