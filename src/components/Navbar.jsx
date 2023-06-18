import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);
  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={() => setExpandNavbar(prev => !prev)}>
          <GiHamburgerMenu />
        </button>
      </div>
      <div className="links">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/projects">
          Projects
        </Link>
        <Link className="link" to="/experience">
          Experience
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
