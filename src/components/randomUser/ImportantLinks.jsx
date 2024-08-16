import { useContext } from "react";
import PropTypes from "prop-types";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import APIContext from "../../contexts/apiContext";

const ShimmerEffect = () => {
  return (
    <div className="flex items-center space-x-1 animate-pulse">
      <div className="flex items-center justify-center w-5 h-5 bg-gray-500 rounded-full">
        <div className="bg-gray-400 p-0.5 rounded-full"></div>
      </div>
      <div className="w-16 h-2 bg-gray-500 rounded-full "></div>
    </div>
  );
};

const ImportantLinks = ({ coordinates, cell }) => {
  const { isLoading } = useContext(APIContext);

  return (
    <div className="flex items-center justify-center space-x-5 py-3 text-sm border-t border-b border-black/10">
      {isLoading ? (
        <ShimmerEffect />
      ) : (
        <a
          target="_blank"
          href={`https://www.google.com/maps/place/${
            coordinates?.latitude || ""
          }, ${coordinates?.longitude || ""}`}
          className="flex items-center space-x-1"
        >
          <span className="text-white bg-black p-1 rounded-full">
            <IoLocationOutline />
          </span>
          <span className="text-black/70">Location</span>
        </a>
      )}
      {isLoading ? (
        <ShimmerEffect />
      ) : (
        <a
          target="_blank"
          href={`tel:${cell}`}
          className="flex items-center space-x-1"
        >
          <span className="text-white  bg-black p-1 rounded-full">
            <IoCallOutline />
          </span>
          <span className="text-black/70">Call me</span>
        </a>
      )}
    </div>
  );
};

ImportantLinks.propTypes = {
  coordinates: PropTypes.object.isRequired,
  cell: PropTypes.string.isRequired,
};

export default ImportantLinks;
