import { useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import Navbar from "../Navbar/Navbar";
import searchStyles from "../Search/Search.module.scss";

interface HeaderProps {
  setQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setQuery }) => {
  const location = useLocation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const isFilmsPage = location.pathname === "/films";

  return (
    <div className={styles.header}>
      <h2 className={styles.logo}>My films</h2>
      <div className={styles.centerContainer}>
        {isFilmsPage && (
          <div className={styles.searchContainer}>
            <input
              type="text"
              className={searchStyles.searchInput}
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
