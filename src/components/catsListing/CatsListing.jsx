import { useContext, useEffect, useRef, useState } from "react";
import Card from "./Card";
import Header from "./Header";
import APIContext from "../../contexts/apiContext";
import axios from "axios";

const CatsListing = () => {
  const { toggleLoading, logErrors } = useContext(APIContext);
  const [catsData, setCatsData] = useState([]);
  const ref = useRef(null);

  const loadCats = async () => {
    try {
      toggleLoading(true);
      const apiURL = `https://api.freeapi.app/api/v1/public/cats?page=1&limit=20`;
      const response = await axios.get(apiURL);
      if (response?.data?.data) {
        const content = response.data.data.data;
        setCatsData([...content]);
      }
      toggleLoading(false);
    } catch (error) {
      logErrors(error.message);
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    if (ref?.current) {
      ref.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    const element = ref?.current;
    if (element) {
      element.addEventListener("wheel", handleWheel);
    }
    return () => {
      if (element) element?.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    loadCats();
  }, []);
  return (
    <div className="w-full space-y-5">
      <Header />
      <div ref={ref} className="w-full overflow-scroll">
        <div className="flex items-center w-fit overflow-scroll">
          {catsData?.map((catData, key) => (
            <Card key={key} catData={catData} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CatsListing;
