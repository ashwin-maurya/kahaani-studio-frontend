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
      <h1 className="text-center font-CooperHevitt text-4xl font-thin uppercase max-md:text-xl">
        FEATURED DESTINATIONS
      </h1>
      <div className="mt-10 block w-full columns-3 break-inside-avoid gap-0 px-10 max-lg:columns-2 max-md:mt-3 max-md:columns-2 max-md:px-0">
        {travelDestinationsData.map((destination) => (
          <a href="#" className="relative overflow-hidden">
            <div key={destination.id} className={`group bg-cover bg-no-repeat`}>
              <a
                href={destination.link}
                className="flex h-full w-full items-center justify-center text-center mix-blend-normal "
              >
                <img
                  loading="lazy"
                  className="w-full scale-95 object-cover object-center transition-all duration-500 ease-in-out group-hover:opacity-80"
                  src={destination.imageUrl}
                />
                <div className="absolute m-0 flex h-auto w-full flex-wrap items-center justify-center p-5 text-white">
                  <span className="bg-[#00000082] px-10 py-5 font-Oswald text-xl font-bold uppercase tracking-wider transition-all duration-500 ease-out  max-sm:text-sm">
                    {destination.title}
                  </span>
                </div>
              </a>
            </div>
          </a>
        ))}
      </div>
      <SubTravelDestinations />
    </>
  );
}
