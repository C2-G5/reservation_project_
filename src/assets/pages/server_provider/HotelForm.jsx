import React, { useState, useEffect,useReducer} from "react";
import HotelFormOnly from "./HotelFormOnly";
import RoomFormOnly from "./RoomFormOnly";
import axios from "axios";
const HotelForm = (props) => {
  const [isHotel, setIsHotel] = useState()
  const [reducer, forceUpdate] = useReducer((x) => x + 1, 0)

  useEffect(() => {
    axios.get(`http://localhost:5500/rooms/hotelrooms/${props.userid}`).then((res) => {
      setIsHotel(res.data[0].hotel_id)
    });
  }, [reducer])
  return (
    <div>
      {!isHotel && <HotelFormOnly userid={props.userid} forceUpdate={forceUpdate} />}
      {isHotel && <RoomFormOnly userid={props.userid} />}
      <div className="flex justify-center m-4">
        {" "}
        <button
          type="submit"
          class="px-6 py-2 leading-5 text-black transition-colors duration-200 transform bg-[#5c97b3] rounded-md hover:bg-[#5188a1] focus:outline-none focus:bg-gray-600"
        >
          Add My Hotel
        </button>
      </div>
    </div>
  );
};

export default HotelForm;
