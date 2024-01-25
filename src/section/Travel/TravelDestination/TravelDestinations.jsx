import React from "react";
import SubTravelDestinations from "./SubTravelDestinations";
import { useNavigate } from "react-router-dom";
const travelDestinationsData = [
  {
    id: 1,
    title: "paris",
    imageUrl:
      "https://images.pexels.com/photos/7919/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    id: 2,
    title: "new york",
    imageUrl:
      "https://images.pexels.com/photos/774861/pexels-photo-774861.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    id: 3,
    title: "tokyo",
    imageUrl:
      "https://images.pexels.com/photos/1367179/pexels-photo-1367179.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    id: 4,
    title: "kolkata",
    imageUrl:
      "https://images.pexels.com/photos/1367105/pexels-photo-1367105.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    id: 5,
    title: "Mumbai",
    imageUrl:
      "https://images.pexels.com/photos/1292115/pexels-photo-1292115.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    id: 6,
    title: "Delhi",
    imageUrl:
      "https://images.pexels.com/photos/794079/pexels-photo-794079.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
];
export default function TravelDestinations() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-center font-CooperHevitt text-4xl font-thin uppercase max-md:text-xl">
        FEATURED DESTINATIONS
      </h1>
      <div className="mt-10 block w-full columns-3 break-inside-avoid gap-0 px-10 max-lg:columns-2 max-md:mt-3 max-md:columns-2 max-md:px-0">
        {travelDestinationsData.map((destination) => (
          <div
            key={destination.id}
            className="relative overflow-hidden"
            onClick={() =>
              navigate(
                `/destination/${destination.title.toLowerCase().replace(/\s+/g, "-")}`,
              )
            }
          >
            <div className={`group bg-cover bg-no-repeat`}>
              <div className="flex h-full w-full items-center justify-center text-center mix-blend-normal ">
                <img
                  loading="lazy"
                  className="h-[300px] w-full scale-95 object-cover object-center transition-all duration-500 ease-in-out group-hover:opacity-80"
                  src={destination.imageUrl}
                />
                <div className="absolute m-0 flex h-auto w-full flex-wrap items-center justify-center p-5 text-white">
                  <span className="bg-[#00000082] px-10 py-5 font-Oswald text-xl font-bold uppercase tracking-wider transition-all duration-500 ease-out  max-sm:text-sm">
                    {destination.title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <SubTravelDestinations />
    </>
  );
}
