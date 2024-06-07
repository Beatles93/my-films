import styled from "styled-components";

export const Container = styled.div`
  /* Ваши стили для контейнера */
`;

export const Content = styled.div`
  /* Ваши стили для основного контента */
`;

export const FooterContainer = styled.footer`
  /* Ваши стили для footer */
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #5398cd;
  padding: 10px 20px;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
`;

export const SocialBtn = styled.a`
  display: inline-block;
  background-color: transparent;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
  }
`;

export const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
`;
