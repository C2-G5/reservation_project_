import { SiHotelsdotcom } from "react-icons/si";
import { MdLocalHotel } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { CiInboxIn } from "react-icons/ci";

export const Stats = () => {
  return (
    <div className="stats shadow stats-vertical xl:stats-horizontal md:stats-horizontal bg-[#5aa1c2] ">
      <div className="stat">
        <div className="stat-figure text-[#222222]">
          <SiHotelsdotcom className="text-[40px]" />
        </div>
        <div className="stat-title  text-[#222222] font-bold">Total Hotels</div>
        <div className="stat-value text-white">30</div>
      </div>

      <div className="stat">
        <div className="stat-figure  text-[#222222]">
          <MdLocalHotel className="text-[40px]" />
        </div>
        <div className="stat-title  text-[#222222] font-bold">Total Rooms</div>
        <div className="stat-value text-white">300</div>
      </div>

      <div className="stat">
        <div className="stat-figure  text-[#222222] ">
          <FiUsers className="text-[40px] " />
        </div>
        <div className="stat-title  text-[#222222] font-bold">Total Users</div>
        <div className="stat-value text-white">500</div>
      </div>
      <div className="stat">
        <div className="stat-figure  text-[#222222] ">
          <CiInboxIn className="text-[40px] " />
        </div>
        <div className="stat-title  text-[#222222] font-bold">
          Total Requests
        </div>
        <div className="stat-value text-white">5</div>
      </div>
    </div>
  );
};
