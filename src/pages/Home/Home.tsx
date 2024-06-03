import { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import loaderSvg from "../../assets/loader.svg"; 

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = "./public/images/bodyHome.jpg";
    img.onload = () => setLoading(false);
  }, []);

  return (
    <div className={styles.home}>
      {loading ? (
        <div className={styles.loaderContainer}>
          <img src={loaderSvg} alt="Loading..." className={styles.loader} />
        </div>
      ) : (
        <header className={styles.appHeader}>
          <div className={styles.imgBody}>
            <img
              className={styles.imgHeader}
              src="./public/images/bodyHome.jpg"
              alt="body"
            />
          </div>
        </header>
      )}
    </div>
  );
};

export default Home;
