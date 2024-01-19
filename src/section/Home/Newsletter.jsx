import React from "react";

export default function Newsletter() {
  return (
    <>
      <div class="container my-24 mx-auto md:px-6">
        <section class="mb-32 text-center lg:text-left">
          <div class="py-12 max-md:px-5 md:px-6 lg:my-12">
            <div class="container mx-auto xl:px-32">
              <div class="grid items-center gap-12 lg:grid-cols-2">
                <div class="md:mt-12 lg:mt-0">
                  <h1 class="mb-12 max-md:mb-6 text-4xl font-bold font-Oswald tracking-tight md:text-5xl xl:text-6xl">
                    Are you ready <br className="max-md:hidden" />
                    <span class="text-primary blogstext-primary-400">
                      for an adventure?
                    </span>
                  </h1>
                  <div class="mb-6 flex-row md:mb-0 md:flex">
                    <div
                      class="relative mb-3 w-full md:mr-3 md:mb-0"
                      data-te-input-wrapper-init
                    >
                      <input
                        type="text"
                        class="peer block min-h-[auto] border w-full rounded bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none blogstext-neutral-200 blogsplaceholder:text-neutral-200 blogspeer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput2"
                        placeholder="Enter your email"
                      />
                      <label
                        for="exampleFormControlInput2"
                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none blogstext-neutral-200 blogspeer-focus:text-primary"
                      >
                        Enter your email
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="px-3 rounded-sm py-2 text-lg font-semibold tracki uppercase text-gray-100 bg-violet-400"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                <div class="mb-12 lg:mb-0">
                  <div class="relative w-full overflow-hidden rounded-lg shadow-lg blogsshadow-black/20 pt-72">
                    <iframe
                      class="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full"
                      src="https://www.youtube.com/embed/gYjRhHzqeLc?si=9niHgcqMTNCh8iCF"
                      allowfullscreen=""
                      data-gtm-yt-inspected-2340190_699="true"
                      id="240632615"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
