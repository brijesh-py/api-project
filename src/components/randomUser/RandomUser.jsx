import { useContext, useEffect, useState } from "react";
import axios from "axios";
import APIContext from "../../contexts/apiContext";
import Header from "./Header";
import Profile from "./Profile";
import UserInfo from "./UserInfo";
import ImportantLinks from "./ImportantLinks";
import "./RandomUser.css";


const RandomUser = () => {
  const { isLoading, toggleLoading, logErrors } = useContext(APIContext);
  const [userData, setUserData] = useState(null);

  const loadUser = async () => {
    try {
      toggleLoading(true);
      const apiURL = import.meta.env.VITE_RANDOM_USER_ENDPOINT;
      const response = await axios.get(apiURL);
      if (response?.data?.data) {
        const { name, dob, cell, phone, picture, registered, login, location } =
          response.data.data;
        setUserData({
          name,
          dob,
          cell,
          phone,
          picture,
          registered,
          login,
          location,
        });
      }
      toggleLoading(false);
    } catch (error) {
      logErrors(error.message);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="space-y-4 px-5 py-4 w-[345px] sm:w-[400px] mx-auto bg-[#B6B3F3] border-[6px] border-white rounded-2xl">
      <Header onClick={() => !isLoading && loadUser()} />
      <Profile
        title={userData?.name?.title || ""}
        picture={userData?.picture?.medium || ""}
        fullName={userData?.name?.first || "" + userData?.name?.last || ""}
        username={userData?.login?.username || ""}
      />
      <ImportantLinks
        coordinates={userData?.location?.coordinates || {}}
        cell={userData?.cell || ""}
      />
      <UserInfo
        city={userData?.location?.city || ""}
        country={userData?.location?.country || ""}
        dob={userData?.dob?.date || ""}
        phone={userData?.phone || ""}
        timeZone={userData?.location?.timezone?.offset || ""}
        registered={userData?.registered?.date || " "}
      />
      <div className="text-center">
        <a href="" className="block mx-auto mt-12 text-white text-xs">
          @ chai aur code
        </a>
      </div>
    </div>
  );
};

export default RandomUser;
