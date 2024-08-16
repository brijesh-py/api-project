import { useContext } from "react";
import APIContext from "../../contexts/apiContext";

const TimeStamp = () => {
  const { isLoading } = useContext(APIContext);
  const getRandomTime = () => {
    let hours = Math.floor(Math.random() * 11 + 1).toString();
    let minutes = Math.floor(Math.random() * 58 + 1).toString();

    hours = hours.length == 2 ? hours : 0 + hours;
    minutes = minutes.length == 2 ? minutes : 0 + minutes;

    return `${hours}:${minutes} ${Number(minutes) % 2 == 0 ? "PM" : "AM"}`;
  };

  const getRandomDate = () => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let date = Math.floor(Math.random() * 30 + 1).toString();
    let month = Math.floor(Math.random() * 11 + 1).toString();
    const year = new Date().getFullYear() - Math.floor(Math.random() * 10);

    date = date.length == 2 ? date : 0 + date;

    return `${months[month]} ${date}, ${year}`;
  };

  const getRandomViews = () => {
    const views = (Math.random() * 100).toFixed(1);
    const MorK = Math.floor(Math.random() * 100) % 2 ? "M" : "K";

    return `${views}${MorK}`;
  };
  
  return (
    <div className="flex items-center space-x-2 mb-2 text-sm text-gray-600 dark:text-gray-400">
      {isLoading ? (
        <div className="w-full animate-pulse">
          <div className="w-44 h-2 bg-gray-200 rounded-full dark:bg-gray-800"></div>
        </div>
      ) : (
        <>
          <span>
            {getRandomTime()} - {getRandomDate()}
          </span>
          <div>
            <span className="me-1 font-bold dark:text-gray-400">
              {getRandomViews()}
            </span>
            <small>Views</small>
          </div>
        </>
      )}
    </div>
  );
};

export default TimeStamp;
