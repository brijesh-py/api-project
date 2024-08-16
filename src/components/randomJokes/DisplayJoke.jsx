import PropTypes from "prop-types";
import APIContext from "../../contexts/apiContext";
import { useContext } from "react";

const DisplayJoke = ({ joke }) => {
  const { isLoading } = useContext(APIContext);
  return (
    <div className="text-md leading-6 font-medium text-gray-700 dark:text-gray-200">
      {isLoading ? (
        <div className="animate-pulse">
          <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2 dark:bg-gray-800"></div>
          <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2 dark:bg-gray-800"></div>
          <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2 dark:bg-gray-800"></div>
          <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5 dark:bg-gray-800"></div>
        </div>
      ) : (
        <span className="font-Inter">{joke}</span>
      )}
    </div>
  );
};
DisplayJoke.propTypes = {
  joke: PropTypes.string.isRequired,
};
export default DisplayJoke;
