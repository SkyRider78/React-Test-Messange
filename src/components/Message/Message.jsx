import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../../utils/ThemeContext";
import "./Message.style.scss";

export const Message = ({ author, text, theme }) => {
   // const { theme } = useContext(ThemeContext);
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
const withThemeContext = (Component) => (props) => {
   const { theme } = useContext(ThemeContext);

   return <Component {...props} theme={theme} />;
};

export const MessageWithBlueColor = withThemeContext(Message);