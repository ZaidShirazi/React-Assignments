import { NavLink } from "react-router";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/settings"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Settings
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/contact"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/users"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
