import React from "react";

export default function Articles() {
  return (
    <>
      <main class="w-screen py-6 bg-yellow-50 flex items-center justify-center flex-wrap">
        <div class="bg-white w-72 h-96 shadow-md rounded m-3">
          <div class="h-3/4 w-full">
            <img
              class="w-full h-full object-cover rounded-t"
              src="https://images.pexels.com/photos/6157052/pexels-photo-6157052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="piña"
            />
          </div>
          <div class="w-full h-1/4 p-3">
            <a href="#" class=" hover:text-yellow-600 text-gray-700">
              <span class="text-lg font-semibold uppercase tracking-wide ">
                Pineapple
              </span>
            </a>
            <p class="text-gray-600 text-sm leading-5 mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div class="bg-white w-72 h-96 shadow-md rounded m-3">
          <div class="h-3/4 w-full">
            <img
              class="w-full h-full object-cover rounded-t"
              src="https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="piña"
            />
          </div>
          <div class="w-full h-1/4 p-3">
            <a href="#" class=" hover:text-yellow-600 text-gray-700">
              <span class="text-lg font-semibold uppercase tracking-wide ">
                Banana
              </span>
            </a>
            <p class="text-gray-600 text-sm leading-5 mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div class="bg-white w-72 h-96 shadow-md rounded m-3">
          <div class="h-3/4 w-full">
            <img
              class="w-full h-full object-cover rounded-t"
              src="https://images.pexels.com/photos/5217960/pexels-photo-5217960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="piña"
            />
          </div>
          <div class="w-full h-1/4 p-3">
            <a href="#" class=" hover:text-yellow-600 text-gray-700">
              <span class="text-lg font-semibold uppercase tracking-wide ">
                Mango
              </span>
            </a>
            <p class="text-gray-600 text-sm leading-5 mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
