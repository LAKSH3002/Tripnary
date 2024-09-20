import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const navigate = useNavigate(); // Hook for navigation

  const handlebutton = () => {
    navigate("/Signup"); // Navigate to the "/Signup" page
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Tripnary</h1>

      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link className="nav-links" to="/">
            <i className="fa-solid fa-house"></i>
            Home
          </Link>
          <Link className="nav-links" to="/about">
            <i className="fa-solid fa-circle-info"></i>
            About
          </Link>
          <Link className="nav-links" to="/service">
            <i className="fa-solid fa-briefcase"></i>
            Services
          </Link>
          <Link className="nav-links" to="/contact">
            <i className="fa-solid fa-address-book"></i>
            Contact
          </Link>
          <Link className="nav-links">
            Sign up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

/*

const navigate = useNavigate(); // Hook for navigation

const handlebutton = () => {
navigate("/Signup"); // Navigate to the "/Signup" page  
};

<button className="button" onClick={handlebutton}>
Sign Up
</button>
*/
