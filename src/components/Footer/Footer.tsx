import Contacts from "../Contacts/Contacts";
import {
  Container,
  Content,
  FooterContainer,
  FooterContent,
  SocialLinks,
  SocialBtn,
  SocialIcon,
} from "./styled-components";

const Footer = () => {
  return (
    <Container>
      <Content>{/* Ваш основной контент здесь */}</Content>
      <FooterContainer>
        <FooterContent>
          <SocialLinks>
            <SocialBtn
              href="https://www.instagram.com/zhukkk93/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon src="/images/instagram.png" alt="Instagram" />
            </SocialBtn>
            <SocialBtn
              href="https://www.tiktok.com/@stepstone93?lang=ru"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon src="/images/tiktok.png" alt="TikTok" />
            </SocialBtn>
            <SocialBtn
              href="https://www.youtube.com/@dota-bluewater4039/videos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon src="/images/youtube.png" alt="Youtube" />
            </SocialBtn>
            <SocialBtn
              href="https://www.twitch.tv/beatles9319"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon src="/images/twitch.png" alt="Twitch" />
            </SocialBtn>
            <SocialBtn
              href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=CllgCKCGDMGwCnfgcvJSmPFDsbMZwkHfzBKtkkLDGhFbJKdKBLPRCzdWtZqdrPwxjmHjGccDWqq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon src="/images/gmail.png" alt="Gmail" />
            </SocialBtn>
          </SocialLinks>
          <Contacts />
        </FooterContent>
      </FooterContainer>
    </Container>
  );
};

export default Footer;
