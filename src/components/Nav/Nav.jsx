import { NavLink } from "react-router-dom";
import { paths, protectedPaths } from "../../router/Paths";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import s from "./Nav.module.scss";

export const Nav = ({ isNavHidden }) => {
  const { user } = useContext(UserContext);
  return (
    <nav>
      <ul
        className={`${s.navStyling} ${
          isNavHidden ? s.hiddenStyling : s.navStyling
        }`}
      >
        {paths.map((item) => {
          return (
            <>
              {item.text ? (
                <li key={item.id}>
                  <NavLink to={item.path}>{item.text}</NavLink>
                </li>
              ) : null}
            </>
          );
        })}

        {user
          ? protectedPaths.map((item) => {
              return (
                <li key={item.id}>
                  <NavLink to={item.path}>{item.text}</NavLink>
                </li>
              );
            })
          : null}
      </ul>
    </nav>
  );
};
