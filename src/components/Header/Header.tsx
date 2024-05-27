import "./styles.css";
import Navbar from "../Navbar/Navbar";

const Header = ({ setQuery }) => {
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="header">
      <h2 className="logo">My films</h2>
      <div className="center-container">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search for movies..."
            onChange={handleInputChange}
          />
          <button className="search-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-search"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
