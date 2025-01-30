import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import s from "./ThemeIcon.module.scss";

export const ThemeIcon = ({ src, type }) => {
  const { changeTheme } = useContext(ThemeContext);
  return (
    <>
      <img
        className={`${s.iconStyling} ${s[type]}`}
        onClick={() => changeTheme()}
        src={src}
        alt="Theme icon"
      />
    </>
  );
};
