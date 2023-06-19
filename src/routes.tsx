import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { LayoutContainer } from "./Layout/LayoutContainer";
import DetailsBook from "./pages/DetailsBook";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutContainer />}>
        <Route path="" element={<Home />} />
        <Route path="details/:id" element={<DetailsBook />} />
      </Route>
    </Routes>
  );
};

export default Router;
