import React from "react";

const featuredDestinations = [
  {
    title: "Exploring the Tropics",
    imageUrl:
      "https://images.pexels.com/photos/7919/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    title: "Journey through Exotic Islands",
    imageUrl:
      "https://images.pexels.com/photos/774861/pexels-photo-774861.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    title: "Discovering Paradise: Tropical Escapes",
    imageUrl:
      "https://images.pexels.com/photos/1367179/pexels-photo-1367179.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    title: "Adventures in Kyoto",
    imageUrl:
      "https://images.pexels.com/photos/1374065/pexels-photo-1374065.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    title: "Island Paradise Retreat",
    imageUrl:
      "https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Jungle Safari Expedition",
    imageUrl:
      "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function BlogContent() {
  return (
    <>
      <h1 className="text-center font-CooperHevitt text-4xl font-thin uppercase max-md:text-xl">
        Latest blogs
      </h1>
      <main className="flex w-full flex-wrap items-start justify-center px-10 py-10 max-md:flex-col max-md:px-6">
        {featuredDestinations.map((destination, index) => (
          <a
            href="#"
            className="group w-1/3 rounded px-5 pb-5 max-md:w-full max-md:px-0"
          >
            <div key={index} className="">
              <div className="h-full w-full">
                <img
                  loading="lazy"
                  className="max-h-[200px] min-h-[200px] w-full rounded-t object-cover"
                  src={destination.imageUrl}
                  alt={destination.title}
                />
              </div>
              <div className="w-full pb-3 pt-2">
                <span className="font-Gamiliademo text-xl font-semibold uppercase tracking-wider text-black group-hover:text-yellow-700">
                  {destination.title}
                </span>
              </div>
            </div>
          </a>
        ))}
      </main>
    </>
  );
}
