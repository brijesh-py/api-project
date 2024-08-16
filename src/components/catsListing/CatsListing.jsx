import Card from "./Card";
import Header from "./Header";

const CatsListing = () => {
  return (
    <div className="w-full px-10 space-y-5">
      <Header />
      <div className="flex items-center overflow-scroll">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
export default CatsListing;
