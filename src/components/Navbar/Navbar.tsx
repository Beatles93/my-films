import { Link } from "react-router-dom";
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/films" className={styles.navLink}>
            Films
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/series" className={styles.navLink}>
            Series
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
