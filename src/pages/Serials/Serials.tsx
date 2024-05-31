import styles from './Serials.module.css';


const Serials = () => {
  return (
    <div className={styles.serials}>
      <div className={styles.imgBody}>
        <img
          className={styles.imgHeader}
          src="./public/images/bodySeries.jpg"
          alt="body"
        />
      </div>
    </div>
  );
};

export default Serials;
