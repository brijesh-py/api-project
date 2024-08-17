import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import APIContext from "../../contexts/apiContext";
import Card from "./Card";
import Header from "./Header";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const CatsListing = () => {
  const { toggleLoading, logErrors, isLoading } = useContext(APIContext);
  const [catsData, setCatsData] = useState([]);
  let page = 0;
  const ref = useRef(null);

  const loadCats = async () => {
    try {
      page = page + 1;
      const limit = 4;
      toggleLoading(true);
      const apiURL = `${
        import.meta.env.VITE_CATS_LISTING_ENDPOINT
      }?page=${page}&limit=${limit}`;
      const response = await axios.get(apiURL);
      if (response?.data?.data) {
        const content = response.data.data.data;
        setCatsData((preCatData) => [...preCatData, ...content]);
        toggleLoading(false);
      }
    } catch (error) {
      logErrors(error.message);
    }
  };

  const handleWheel = async (event) => {
    event.preventDefault();
    if (ref?.current) {
      ref.current.scrollLeft += event.deltaY;
      if (
        ref.current.scrollLeft + ref.current.clientWidth >=
          ref.current.scrollWidth &&
        isLoading
      ) {
        toggleLoading(true);
        await loadCats();
      }
    }
  };

  useEffect(() => {
    const element = ref?.current;
    if (element) {
      element.addEventListener("wheel", handleWheel);
    }
    return () => {
      if (element) {
        element?.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  useEffect(() => {
    loadCats();
  }, []);

  return (
    <div className="w-full space-y-2 md:space-y-5 overflow-scroll">
      <Header />
      <div ref={ref} className="w-full overflow-scroll">
        <div className="flex items-center w-fit overflow-scroll">
          {catsData?.map((catData, key) => (
            <Card key={key} catData={catData} />
          ))}
          {isLoading && (
            <div className="flex items-center h-[70vh] text-2xl md:text-5xl">
              <AiOutlineLoading3Quarters className="animate-spin text-white" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default CatsListing;
