import Contacts from "../Contacts/Contacts";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{/* Ваш основной контент здесь */}</div>
      <footer>
        <div className={styles.footerContent}>
          <div className={styles.socialLinks}>
            <a
              href="https://www.instagram.com/zhukkk93/"
              className={styles.socialBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/instagram.png"
                alt="Instagram"
                className={styles.socialIcon}
              />
            </a>
            <a
              href="https://www.tiktok.com/@stepstone93?lang=ru"
              className={styles.socialBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/tiktok.png"
                alt="TikTok"
                className={styles.socialIcon}
              />
            </a>
            <a
              href="https://www.youtube.com/@dota-bluewater4039/videos"
              className={styles.socialBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/youtube.png"
                alt="Youtube"
                className={styles.socialIcon}
              />
            </a>
            <a
              href="https://www.twitch.tv/beatles9319"
              className={styles.socialBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/twitch.png"
                alt="Twitch"
                className={styles.socialIcon}
              />
            </a>
            <a
              href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=CllgCKCGDMGwCnfgcvJSmPFDsbMZwkHfzBKtkkLDGhFbJKdKBLPRCzdWtZqdrPwxjmHjGccDWqq"
              className={styles.socialBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/gmail.png"
                alt="Gmail"
                className={styles.socialIcon}
              />
            </a>
          </div>
          <Contacts />
        </div>
      </footer>
    </div>
  );
};

export default Footer;

