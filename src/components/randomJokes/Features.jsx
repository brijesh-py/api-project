import { useContext } from "react";
import PropTypes from "prop-types";
import { FaRegHeart, FaRetweet } from "react-icons/fa6";
import { FiUpload } from "react-icons/fi";
import { TfiComment } from "react-icons/tfi";
import { CiBookmark } from "react-icons/ci";
import APIContext from "../../contexts/apiContext";


const Feature = ({ label = true, children }) => {
  const { isLoading } = useContext(APIContext);
  return (
    <>
      {isLoading ? (
        <div className="animate-pulse">
          <div className="h-2 bg-gray-200 rounded-full w-8 dark:bg-gray-800"></div>
        </div>
      ) : (
        <div className="flex items-center space-x-1 cursor-pointer">
          <span className="text-md">{children}</span>
          {label && (
            <span className="text-xs">{(Math.random() * 100).toFixed(1)}K</span>
          )}
        </div>
      )}
    </>
  );
};

Feature.propTypes = {
  label: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

const Features = () => {
  return (
    <div className="flex items-center justify-between p-4 text-gray-600 border-t border-b border-gray-400  dark:text-gray-400 dark:border-gray-700">
      <Feature>
        <TfiComment />
      </Feature>
      <Feature>
        <FaRetweet />
      </Feature>
      <Feature>
        <FaRegHeart />
      </Feature>
      <Feature>
        <CiBookmark />
      </Feature>
      <Feature label={false}>
        <FiUpload />
      </Feature>
    </div>
  );
};

export default Features;
