import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../../utils/ThemeContext";
import "./Message.style.scss";

export const Message = ({ author, text }) => {
   const { theme } = useContext(ThemeContext);
   console.log(theme);

   return (
      <div className="message background">
         <span style={{ color: theme === "dark" ? "white" : "blue" }}>{author}</span>
         <span>: {text}</span>
      </div>
   );
};

Message.propTypes = {
   author: PropTypes.string.isRequired, // тип обязательно строка
   text: PropTypes.string,
}