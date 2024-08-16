import { useContext } from "react";
import PropTypes from "prop-types";
import APIContext from "../../contexts/apiContext";
import { dateFormatter } from "../../utils/dateFormatter";

const Info = ({ infoKey, infoValue }) => {
  const { isLoading } = useContext(APIContext);
  return isLoading ? (
    <div className="space-y-3 mb-2 animate-pulse">
      <div className={`w-20 h-2 bg-gray-500 rounded-full`}></div>
      <div className="w-32 h-2 bg-gray-500 rounded-full "></div>
    </div>
  ) : (
    <div className="">
      <h4 className="w-fit text-black/70 text-sm font-sans">{infoKey}</h4>
      <h2 className="w-fit m-0 p-0 text-black/85 text-xl">{infoValue}</h2>
    </div>
  );
};

Info.propTypes = {
  loading: PropTypes.bool,
  infoKey: PropTypes.string.isRequired,
  infoValue: PropTypes.string.isRequired,
};

const UserInfo = ({ city, country, dob, phone, timeZone, registered }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Info infoKey="City" infoValue={city} />
      <Info infoKey="Nationality" infoValue={country} />
      <Info infoKey="Date of Birth" infoValue={dateFormatter(dob)} />
      <Info infoKey="Phone No" infoValue={phone} />
      <Info infoKey="Time Zone" infoValue={timeZone} />
      <Info infoKey="Registered Since" infoValue={dateFormatter(registered)} />
    </div>
  );
};

UserInfo.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  timeZone: PropTypes.string.isRequired,
  registered: PropTypes.string.isRequired,
};

export default UserInfo;
