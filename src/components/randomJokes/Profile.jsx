import { useContext } from "react";
import { IoIosMore } from "react-icons/io";
import { PiSealCheckFill } from "react-icons/pi";
import APIContext from "../../contexts/apiContext";

const Profile = () => {
  const { isLoading } = useContext(APIContext);
  return isLoading ? (
    <div className="flex items-center justify-between animate-pulse">
      <div className="flex items-center mt-4">
        <svg
          className="w-14 h-14 me-3 text-gray-100 dark:text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
        </svg>
        <div>
          <div className="w-32 h-2 mb-2 bg-gray-200 rounded-full dark:bg-gray-800 "></div>
          <div className="w-36 h-2 bg-gray-200 rounded-full dark:bg-gray-800"></div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img
          className="w-16 h-16 rounded-full"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/The_Prime_Minister%2C_Shri_Narendra_Modi_meeting_Mr._Elon_Musk_in_New_York%2C_USA_on_June_20%2C_2023_%282%29_%28cropped%29.jpg/220px-The_Prime_Minister%2C_Shri_Narendra_Modi_meeting_Mr._Elon_Musk_in_New_York%2C_USA_on_June_20%2C_2023_%282%29_%28cropped%29.jpg"
          alt="Elon Musk"
        />
        <div>
          <h2 className="flex items-center space-x-1 text-xl text-gray-950 font-semibold dark:text-white">
            <span className="font-Inter">Elon Musk</span>
            <span className="text-[#22a0ed]">
              <PiSealCheckFill />
            </span>
          </h2>
          <span className="text-md text-gray-600 dark:text-gray-400">
            @elonmusk
          </span>
        </div>
      </div>
      <span className="text-xl dark:text-gray-400 cursor-pointer">
        <IoIosMore />
      </span>
    </div>
  );
};

export default Profile;
