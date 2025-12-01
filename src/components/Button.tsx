import "./Button.css";
import { ButtonProps } from "../types";

const Button = ({ text, type, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`button button_${type}`}>
      {text}
    </button>
  );
};

export default Button;
