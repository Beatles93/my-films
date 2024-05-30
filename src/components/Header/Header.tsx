import { useLocation } from "react-router-dom";
import "./styles.css";
import Navbar from "../Navbar/Navbar";
import '../Search/styles.css'

const Header = ({ setQuery }) => {
  const location = useLocation();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const isFilmsPage = location.pathname === "/films";

  return (
    <div className="header">
      <h2 className="logo">My films</h2>
      <div className="center-container">
          {isFilmsPage && (
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search for movies..."
            onChange={handleInputChange}
          />
          </div>
          )}
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
