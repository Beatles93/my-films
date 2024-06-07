import { useState, useEffect } from "react";
import styles from "./Serials.module.scss";
import loaderSvg from "../../assets/loader.svg"; 

const Serials = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = "/images/bodySeries.jpg";
    img.onload = () => setLoading(false);
  }, []);

  return (
    <div className={styles.serials}>
      {loading ? (
        <div className={styles.loaderContainer}>
          <img src={loaderSvg} alt="Loading..." className={styles.loader} />
        </div>
      ) : (
        <div className={styles.imgBody}>
          <img
            className={styles.imgHeader}
            src="/images/bodySeries.jpg"
            alt="body"
          />
        </div>
      )}
    </div>
  );
};

export default Serials;
