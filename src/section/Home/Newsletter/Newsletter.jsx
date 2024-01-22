import React from "react";
import YoutubeLazyLoad from "../YoutubeContent/YoutubeLazyLoad";
export default function Newsletter() {
  return (
    <>
      <div class="mx-auto max-w-screen-xl ">
        <section class="mb-32 text-center lg:text-left">
          <div class="my-6 max-md:px-5 md:px-6">
            <div class="mx-auto xl:px-12">
              <div class="grid items-center gap-12 lg:grid-cols-2">
                <div class="md:mt-12 lg:mt-0">
                  <h1 class="mb-12 flex flex-col font-Oswald text-5xl font-bold tracking-normal text-white max-md:mb-6 max-md:text-3xl 2xl:text-6xl">
                    <div>
                      Are you ready <br className="max-md:hidden" />
                      <span class="text-primary blogstext-primary-400">
                        for an adventure?
                      </span>
                    </div>
                    <span className="my-2 font-Authorfont text-base text-white">
                      Subsribe to my NewsLetter
                    </span>
                  </h1>
                  <div class="mb-6 flex-row items-center justify-center md:mb-0 md:flex">
                    <div
                      class="relative mb-3 w-full md:mb-0 md:mr-3"
                      data-te-input-wrapper-init
                    >
                      <input
                        type="text"
                        class="peer block min-h-[auto] w-full rounded border-none  border-white bg-transparent px-3 py-[0.32rem] leading-[2.15] text-white outline-none outline-1 outline-white ring-0 transition-all duration-200 ease-linear placeholder:text-white "
                        id="exampleFormControlInput2 "
                        placeholder="example@xyz.com"
                      />
                      <label
                        for="exampleFormControlInput2"
                        class="text-primary pointer-events-none absolute  left-3 top-0 mb-0 max-w-[90%] origin-[0_0] -translate-y-[20px] scale-[0.8] truncate bg-blue-300 pt-[0.37rem] font-sans leading-[2.15] text-white antialiased transition-all duration-200 ease-out "
                      >
                        Enter your email
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="rounded-sm bg-white px-3 py-2 text-lg font-semibold uppercase  text-gray-800 transition-all duration-100 ease-linear hover:scale-[1.01] hover:shadow-xl"
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
