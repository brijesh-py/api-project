import PropTypes from "prop-types";

const Card = ({ catData }) => {
  return (
    <div className=" w-60 sm:w-[360px] mx-2 sm:mx-5 bg-white rounded-lg overflow-hidden">
      <img
        loading="lazy"
        className="w-full h-[200px]"
        src={catData?.image || ""}
        alt={catData?.name || ""}
      />
      <div className="space-y-1 p-3">
        <h2 className="text-3xl">{catData?.name || ""}</h2>
        <p className="leading-6 max-h-[90px] overflow-hidden">
          {catData?.description || ""}
        </p>
        <div className="flex items-center space-x-6">
          <b className="block text-sm italic">Origin</b>
          <span>{catData?.origin || ""}</span>
        </div>
        <div>
          <b className="block italic text-sm">Temperament</b>
          <div className="flex items-start flex-wrap mt-2">
            {catData?.temperament?.split(",").map((temperament, key) => (
              <span
                key={key}
                className="me-2 mb-2 px-1.5 py-0.5  text-xs text-white bg-gray-400/80 rounded-lg hover:bg-pink-400 cursor-pointer"
              >
                {temperament}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <b className="block text-sm italic">Life Span</b>
          <span>{catData?.life_span || ""} years</span>
        </div>
        <a href={catData?.wikipedia_url || ""} className="text-sky-500">
          Learn more
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  catData: PropTypes.object.isRequired,
};

export default Card;
