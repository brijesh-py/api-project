import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import Layout from "./Layout";
import RandomUserPage from "./pages/RandomUserPage";
import RandomJokesPage from "./pages/RandomJokesPage";
import CatsListingPage from "./pages/CatsListingPage";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Navigate to="random-user" replace />} />
      <Route path="/random-user" element={<RandomUserPage />} />
      <Route path="/random-jokes" element={<RandomJokesPage />} />
      <Route path="/cats-listing" element={<CatsListingPage />} />
    </Route>
  )
);
export default routes;
