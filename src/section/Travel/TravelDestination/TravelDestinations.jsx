import React, { useContext, useEffect } from "react";
import SubTravelDestinations from "./SubTravelDestinations";
import { useNavigate } from "react-router-dom";
import DestinationClientContext from "../../../Contexts/Destinations/DestinationClientContext";

export default function TravelDestinations() {
  const navigate = useNavigate();
  const { destinations, fetchDestinations } = useContext(
    DestinationClientContext,
  );

  useEffect(() => {
    // Fetch destinations when the component mounts
    fetchDestinations();
  }, []);

  // Display only the top 6 destinations
  const topDestinations = destinations.slice(0, 6);

  // If there are more destinations, pass them to SubTravelDestinations
  const remainingDestinations = destinations.slice(6);

  const getDefaultImage = () => {
    // Replace with the default image URL if imageURL is not found or empty
    return "https://1.img-dpreview.com/files/p/TS560x560~forums/62803172/ae5fffae14814b88b8eb7551ef16ea84";
  };

  return (
    <>
      <h1 className="text-center font-CooperHevitt text-4xl font-thin uppercase max-md:text-xl">
        FEATURED DESTINATIONS
      </h1>
      <div className="mt-10 block w-full columns-3 break-inside-avoid gap-0 px-10 max-lg:columns-2 max-md:mt-3 max-md:columns-2 max-md:px-0">
        {topDestinations.map((destination, index) => (
          <div
            key={index}
            className="relative overflow-hidden"
            onClick={() =>
              navigate(
                `/destination/${destination.location.toLowerCase().replace(/\s+/g, "-")}`,
              )
            }
          >
            <div className={`group bg-cover bg-no-repeat`}>
              <div className="flex h-full w-full items-center justify-center text-center mix-blend-normal ">
                <img
                  loading="lazy"
                  className="h-[300px] w-full scale-95 object-cover object-center transition-all duration-500 ease-in-out group-hover:opacity-80"
                  src={destination.imageURL || getDefaultImage()}
                />
                <div className="absolute m-0 flex h-auto w-full flex-wrap items-center justify-center p-5 text-white">
                  <span className="bg-[#00000082] px-10 py-5 font-Oswald text-xl font-bold uppercase tracking-wider transition-all duration-500 ease-out  max-sm:text-sm">
                    {destination.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Display SubTravelDestinations only if there are more destinations */}
      {remainingDestinations.length > 0 && (
        <SubTravelDestinations destinations={remainingDestinations} />
      )}{" "}
    </>
  );
}
