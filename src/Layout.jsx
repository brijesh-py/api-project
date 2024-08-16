import { Outlet } from "react-router-dom";
import APIContext from "./contexts/apiContext";
import { NetworkError } from "./components/";
import { useContext } from "react";

const Layout = () => {
  const { error } = useContext(APIContext);
  return (
    <>
      <main className="flex items-center justify-between w-full h-screen bg-black">
        {error ? <NetworkError /> : <Outlet />}
      </main>
    </>
  );
};
export default Layout;
