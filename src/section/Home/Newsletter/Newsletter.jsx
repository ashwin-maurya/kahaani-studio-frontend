import React from "react";
import YoutubeLazyLoad from "../YoutubeContent/YoutubeLazyLoad";
export default function Newsletter() {
  return (
    <>
      <div class="max-w-screen-xl mx-auto ">
        <section class="mb-32 text-center lg:text-left">
          <div class="max-md:px-5 md:px-6 my-6">
            <div class="mx-auto xl:px-12">
              <div class="grid items-center gap-12 lg:grid-cols-2">
                <div class="md:mt-12 lg:mt-0">
                  <h1 class="mb-12 max-md:mb-6 text-white text-4xl font-bold font-Oswald tracking-tight md:text-5xl xl:text-6xl">
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
                        class="peer block min-h-[auto] border w-full rounded bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear placeholder:text-white text-white"
                        id="exampleFormControlInput2"
                        placeholder="example@xyz.com"
                      />
                      <label
                        for="exampleFormControlInput2"
                        class="pointer-events-none absolute text-white  antialiased top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] scale-[0.8] bg-purple-400 text-primary -translate-y-[1.15rem] "
                      >
                        Enter your email
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="px-3 rounded-sm py-2 text-lg font-semibold uppercase text-purple-400  transition-all duration-100 hover:shadow-xl ease-linear hover:scale-[1.03] bg-white"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                <div class="aspect-video shadow-xl ">
                  <YoutubeLazyLoad videoUrl="O-OKQo9O-68" altText="A trip" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
