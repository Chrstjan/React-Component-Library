import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav/Nav";
import { useState } from "react";
import { BurgerMenu } from "../components/BurgerMenu/BurgerMenu";

export const MainLayout = () => {
  const [isNavHidden, setIsNavHidden] = useState(true);
  return (
    <>
      <Nav isNavHidden={isNavHidden} />
      <BurgerMenu setIsNavHidden={setIsNavHidden} />
      <Outlet />
    </>
  );
};
