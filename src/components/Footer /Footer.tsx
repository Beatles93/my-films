import Contacts from "../Contacts/Contact";
import "./styles.css";

const Footer = () => {
  return (
    <div className="container">
      <div className="content">
        {/* Ваш основной контент здесь */}
      </div>
      <footer>
        <div className="footer-content">
          <div className="social-links">
            <a
              href="https://www.instagram.com/zhukkk93/"
              className="social-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/instagram.png"
                alt="Instagram"
                className="social-icon"
              />
            </a>
            <a
              href="https://www.tiktok.com/@stepstone93?lang=ru"
              className="social-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/tiktok.png"
                alt="TikTok"
                className="social-icon"
              />
            </a>
            <a
              href="https://www.youtube.com/@dota-bluewater4039/videos"
              className="social-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/youtube.png"
                alt="Youtube"
                className="social-icon"
              />
            </a>
            <a
              href="https://www.twitch.tv/beatles9319"
              className="social-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/twitch.png"
                alt="Twitch"
                className="social-icon"
              />
            </a>
            <a
              href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=CllgCKCGDMGwCnfgcvJSmPFDsbMZwkHfzBKtkkLDGhFbJKdKBLPRCzdWtZqdrPwxjmHjGccDWqq"
              className="social-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/gmail.png" alt="Gmail" className="social-icon" />
            </a>
          </div>
          <Contacts />
        </div>
      </footer>
    </div>
  );
};

export default Footer;

