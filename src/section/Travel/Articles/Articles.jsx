import React from "react";

const articlesData = [
  {
    title: "Ladakh",
    country: "India",
    region: "Jammu and Kashmir",
    description:
      "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens.",
    imageSrc:
      "https://media.istockphoto.com/id/1046313926/photo/indian-bikers-travel-on-national-highway-with-scenic-landscape-at-ladakh-india.jpg?s=612x612&w=0&k=20&c=WjPBCZMD93SFckiZq7b3QdVhgpTkp19QLiuWANT4NuI=",
  },
  {
    title: "Santorini",
    country: "Greece",
    region: "South Aegean",
    description:
      "Santorini is a Greek island in the southern Aegean Sea, known for its stunning sunsets, white-washed buildings, and crystal-clear waters. Explore the charming villages perched on cliffs and indulge in delicious Mediterranean cuisine.",
    imageSrc:
      "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Kyoto",
    country: "Japan",
    region: "Kansai",
    description:
      "Kyoto, a city in central Japan, is famous for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses. Immerse yourself in the rich cultural heritage of this historic city.",
    imageSrc:
      "https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Marrakech",
    country: "Morocco",
    region: "Marrakech-Safi",
    description:
      "Marrakech, a vibrant city in Morocco, is known for its bustling souks, vibrant street life, and stunning palaces. Explore the historic medina, indulge in flavorful Moroccan cuisine, and experience the lively atmosphere.",
    imageSrc:
      "https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Banff National Park",
    country: "Canada",
    region: "Alberta",
    description:
      "Banff National Park in the Canadian Rockies offers breathtaking mountain scenery, turquoise lakes, and abundant wildlife. Explore the picturesque town of Banff, go hiking in the pristine wilderness, and enjoy the beauty of nature.",
    imageSrc:
      "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function Articles() {
  return (
    <>
      {articlesData.map((article, index) => (
        <div
          key={index}
          className={`md mx-14 flex flex-wrap items-center max-md:mx-5 ${
            index % 2 !== 0 ? "flex-row-reverse" : ""
          }`}
        >
          <div className="w-1/2 bg-white p-10 max-md:w-full">
            <div className="max-md:mx-4">
              <h1 className="text-6xl font-bold">{article.title}</h1>

              <div className="mt-8 flex font-light text-gray-500">
                <div className="pr-4">
                  <span className="uppercase">Country</span>
                  <p className="pt-2 text-2xl font-semibold text-gray-900">
                    {article.country}
                  </p>
                </div>
                <div className="pr-4">
                  <span className="uppercase">Region</span>
                  <p className="pt-2 text-2xl font-semibold text-gray-900">
                    {article.region}
                  </p>
                </div>
              </div>

              <div className="description sm: mt-4 w-full text-sm text-gray-500 md:w-2/3">
                {article.description}
              </div>

              <button className="mt-5 text-sm font-semibold uppercase hover:underline">
                read more
              </button>
            </div>
          </div>
          <div className="h-[400px] w-1/2 bg-gray-800 max-md:w-full ">
            <img
              loading="lazy"
              src={article.imageSrc}
              className="h-full w-full object-cover object-center"
              alt=""
            />
          </div>
        </div>
      ))}
    </>
  );
}
