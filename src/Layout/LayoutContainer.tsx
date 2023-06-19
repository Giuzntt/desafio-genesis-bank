import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import { ContainerWrapper } from "../components/Container";

export const LayoutContainer = () => (
  <>
    <Header />
    <ContainerWrapper>
      <Outlet />
    </ContainerWrapper>
  </>
);
