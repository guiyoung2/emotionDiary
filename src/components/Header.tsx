import "./Header.css";
import { HeaderProps } from "../types";

const Header = ({ title, leftChild, rightChild }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header_left">{leftChild}</div>
      <div className="header_center">{title}</div>
      <div className="header_right">{rightChild}</div>
    </header>
  );
};

export default Header;
