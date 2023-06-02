import React from "react";
import Carousel from "../components/HotelDetails/HotelDetailsCarsoul";
import Side from "../components/HotelDetails/HotelSideDetailes";
import Tabs from "../components/HotelDetails/HotelEnd";
function HotelDetails() {
  return (
    <div>
      <section>
        <div class="relative mx-auto max-w-screen-xl px-4 py-8">
          <div>
            <h1 class="text-3xl font-bold lg:text-6xl mb-4 mt-8 mr-44 text-[#3e311f]">
              Classic Room
            </h1>
          </div>

          <div class="grid gap-8 lg:grid-cols-4 lg:items-start">
            <div class="lg:col-span-3">
              <Carousel />
              <div class="lg:col-span-3">
                <div class="prose max-w-none">
                  <Tabs />
                </div>
              </div>
            </div>

            <Side />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HotelDetails;
