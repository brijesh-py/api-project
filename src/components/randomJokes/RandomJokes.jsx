import { useContext, useEffect, useState } from "react";
import axios from "axios";
import APIContext from "../../contexts/apiContext";
import Header from "./Header";
import Profile from "./Profile";
import DisplayJoke from "./DisplayJoke";
import TimeStamp from "./TimeStamp";
import Features from "./Features";
import "./RandomJokes";

const RandomJokes = () => {
  const { toggleLoading, logErrors } = useContext(APIContext);
  const [joke, setJoke] = useState("");

  const loadUser = async () => {
    try {
      toggleLoading(true);
      const apiURL = import.meta.env.VITE_RANDOM_JOKES_ENDPOINT;
      const response = await axios.get(apiURL);
      if (response?.data?.data) {
        const content = response.data.data.content;
        setJoke(content);
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
    <div className="p-4 min-w-[340px] sm:w-[650px] sm:px-6 sm:py-4 bg-gray-100 border rounded-lg shadow-xl dark:bg-black dark:border-gray-900">
      <Header />
      <div className="space-y-2 my-4">
        <Profile />
        <DisplayJoke joke={joke} />
      </div>
      <TimeStamp />
      <Features />
      <div className="text-center p-3">
        <a
          href="https://chaicode.com"
          className="text-sm font-bold text-gray-500 dark:text-gray-500"
        >
          © chai aur code
        </a>
      </div>
    </div>
  );
};

export default RandomJokes;
