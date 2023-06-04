import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LocationMenue from "../HotelDetails/LocationMenu";
const SearchBar = () => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [rooms, setRooms] = useState("1");
  const [guests, setGuests] = useState("1");

  const handleCheckInDateChange = (e) => {
    setCheckInDate(e.target.value);
  };

  const handleCheckOutDateChange = (e) => {
    setCheckOutDate(e.target.value);
  };

  const handleRoomsChange = (e) => {
    setRooms(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };
  const handleCheckAvailability = () => {
    // Perform the check availability action here
    console.log("Check availability clicked");
    console.log("Check-In Date:", checkInDate);
    console.log("Check-Out Date:", checkOutDate);
    console.log("Rooms:", rooms);
    console.log("Guests:", guests);
  };
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        data-aos="fade-up"
        className="homeSection filter-bar flex flex-col sm:flex-row items-center justify-between mx-auto max-w-7xl bg-black z-10 p-4 shadow-md bg-opacity-90	"
        style={{
          position: "absolute",
          top: "440px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
        }}
      >
        <div class="flex flex-col sm:flex-row  md:flex-row  items-center space-y-4 md:space-y-0 md:space-x-4 sm:space-y-0 sm:space-x-4 p-5">
          <div class="w-full sm:w-auto">
            <label for="check-in-date" class="text-white">
              Check-In Date
            </label>
            <input
              type="date"
              id="check-in-date"
              class="m-2 w-full sm:w-32 py-1 px-2 border border-white-300  rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={checkInDate}
              onChange={handleCheckInDateChange}
            />
          </div>
          <div class="w-full sm:w-auto">
            <label for="check-out-date" class="text-white">
              Check-Out Date
            </label>
            <input
              type="date"
              id="check-out-date"
              class="m-2 w-full sm:w-32 py-1 px-2 border border-white-300  rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={checkOutDate}
              onChange={handleCheckOutDateChange}
            />
          </div>
          <div class="w-full sm:w-auto">
            <label for="rooms" class="text-white">
              Room type
            </label>
            <select
              id="rooms"
              value={rooms}
              onChange={handleRoomsChange}
              class="m-2 w-full sm:w-20 py-1 px-2 border border-white-300  rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="1">Single</option>
              <option value="2">Double</option>
              <option value="3">Queen</option>
            </select>
          </div>
          <div class="w-full sm:w-auto">
            <label for="guests" class="text-white">
              Guests
            </label>
            <select
              id="guests"
              value={guests}
              onChange={handleGuestsChange}
              class="m-2 w-full sm:w-20 py-1 px-2 border border-white-300  rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div>
            <LocationMenue />
          </div>
        </div>

        <button
          onClick={handleCheckAvailability}
          class="bg-[#5aa1c2] hover:bg-[#4d89a5] text-white py-5 px-4 mt-4 sm:mt-0 h-full mr-5  rounded-lg"
        >
          Check Availability
        </button>
      </div>
    </>
  );
};

export default SearchBar;
