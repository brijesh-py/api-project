import { FaArrowLeftLong } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex items-center space-x-5 text-gray-800 dark:text-white">
      <span className="cursor-pointer">
        <FaArrowLeftLong />
      </span>
      <h2 className="text-xl">Post</h2>
    </div>
  );
};

export default Header;