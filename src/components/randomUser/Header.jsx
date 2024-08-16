import { useContext } from "react";
import PropTypes from "prop-types";
import { FaArrowLeft } from "react-icons/fa6";
import { GrRefresh } from "react-icons/gr";
import APIContext from "../../contexts/apiContext";

const Header = ({ onClick }) => {
  const { isLoading } = useContext(APIContext);
  return (
    <div className="flex items-center justify-between text-slate-800">
      <FaArrowLeft className="text-black text-lg cursor-pointer" />
      <h2 className="text-black/70 text-lg">Profile Overview</h2>
      <GrRefresh
        className={`text-black text-lg cursor-pointer ${
          isLoading && "animate-spin"
        }`}
        onClick={onClick}
      />
    </div>
  );
};

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Header;
