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
    <Route key={1} path="/" element={<Layout />}>
      <Route key={2} path="/" element={<Navigate to="random-user" replace />} />
      <Route key={3} path="random-user" element={<RandomUserPage />} />
      <Route key={4} path="random-jokes" element={<RandomJokesPage />} />
      <Route key={5} path="cats-listing" element={<CatsListingPage />} />
    </Route>
  )
);
export default routes;
