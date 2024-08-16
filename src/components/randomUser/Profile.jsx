import { useContext } from "react";
import PropTypes from "prop-types";
import APIContext from "../../contexts/apiContext";

const Profile = ({ title, picture, fullName, username }) => {
  const { isLoading } = useContext(APIContext);

  return isLoading ? (
    <div className="space-y-4 animate-pulse">
      <div className="relative flex items-center w-fit mt-8 mx-auto">
        <div className="absolute right-[-10px] bottom-[90px]">
          <span className="block px-4 py-3 bg-gray-500 rounded-full "></span>
        </div>
        <svg
          className="w-[100px] h-[100px] text-gray-500 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
        </svg>
      </div>
      <div className="w-fit space-y-3 mx-auto ">
        <div className="w-24 h-2.5 mx-auto bg-gray-500 rounded-full"></div>
        <div className="w-40 h-2.5 mx-auto bg-gray-500 rounded-full"></div>
      </div>
    </div>
  ) : (
    <div className="space-y-2 text-center">
      <div className="relative flex items-center justify-center mt-10 w-[150px] h-[100px] mx-auto">
        <div className="absolute right-3 bottom-[90px]">
          <span className="px-1.5 py-1 text-white text-xs bg-black rounded-full ">
            {title}
          </span>
        </div>
        <img
          src={picture}
          className="block w-[100px] h-[100px] mx-auto rounded-full"
          alt={fullName}
        />
      </div>
      <div className="space-y-2">
        <h2 className="text-black text-2xl font-donegal">{fullName}</h2>
        <h4 className="text-black text-base">{username}</h4>
      </div>
    </div>
  );
};

Profile.propTypes = {
  title: PropTypes.string,
  picture: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default Profile;
