import React from "react";

const featuredLogos = [
  {
    imageSrc:
      "https://www.noahsarkrugs.com/wp-content/uploads/2017/12/3.-National-Geographic-Traveller.png",
    link: "#",
  },
  {
    imageSrc:
      "https://lnt.org/wp-content/uploads/2022/10/Matador_ReBrand-small-1.jpg",
    link: "#",
  },
  {
    imageSrc: "https://www.getmeupadvertising.in/images/big-logo/logo_toi.png",
    link: "#",
  },
  {
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Cond%C3%A9_Nast_Traveler_logo.png",
    link: "#",
  },
  {
    imageSrc:
      "https://www.outlookindia.com/traveller/wp-content/uploads/2016/12/Traveller-logo-1.png",
    link: "#",
  },
];

export default function BrandLogo() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16">
          <h2 className="mb-8 text-center font-Gamiliademo text-2xl leading-tight tracking-widest text-gray-900">
            Featured in :
          </h2>
          <div className="flex justify-between text-gray-500 max-md:gap-5 max-md:overflow-x-scroll">
            {featuredLogos.map((logo, index) => (
              <a
                key={index}
                href={logo.link}
                className="flex items-center justify-center"
              >
                <img
                  src={logo.imageSrc}
                  className="max-w-[200px]"
                  alt={`Featured Logo ${index + 1}`}
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
