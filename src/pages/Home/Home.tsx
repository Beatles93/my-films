import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <header className={styles.appHeader}>
        <div className={styles.imgBody}>
          <img
            className={styles.imgHeader}
            src="./public/images/bodyHome.jpg"
            alt="body"
          />
        </div>
      </header>
    </div>
  );
};

export default Home;
