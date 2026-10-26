import "./Navbar.css";
import logo from "/logo.png";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <FaBars className="barsIcon" />
        <ul>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">pages</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
