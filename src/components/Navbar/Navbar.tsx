import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link home">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/films" className="nav-link films">
            Films
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/series" className="nav-link series">
            Series
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
