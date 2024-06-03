import styles from './Serials.module.scss';


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
