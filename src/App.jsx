import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { APIProvider } from "./contexts/apiContext";
import "./App.css";

function App() {
  return (
    <>
      <APIProvider>
        <RouterProvider router={routes} />
      </APIProvider>
    </>
  );
}

export default App;
