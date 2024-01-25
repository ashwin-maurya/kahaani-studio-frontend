import React from "react";

export default function ArticleHero() {
  return (
    <>
      <section className="text-center">
        <div className="bg-white px-10 py-10">
          <h3 className="text-center font-Oswald text-base font-thin uppercase tracking-[10px] opacity-90">
            Article By Shihka Gautam
          </h3>
          <br />
          <h2 className="text-center font-Gamiliademo text-4xl font-semibold leading-tight text-gray-800 max-md:text-2xl">
            Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales,
            massa et auctor.
          </h2>
        </div>
      </section>
      <section
        className={`relative flex w-full items-center justify-center overflow-hidden bg-cover bg-fixed bg-top bg-no-repeat py-56`}
        style={{
          backgroundImage: `url("https://www.cleartrip.com/collections/wp-content/uploads/2019/05/Rajasthan-Safari.jpg")`,
        }}
      >
        <h2 className={`font-Oswald text-6xl uppercase text-white`}>
          Rajasthan
        </h2>
      </section>
    </>
  );
}
