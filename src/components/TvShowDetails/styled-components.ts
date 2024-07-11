import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
`;

export const Poster = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Title = styled.h2`
  font-size: 1.5em;
  margin-bottom: 5px;
  text-align: center;
  color: #333;
`;

export const Text = styled.p`
  font-size: 1em;
  margin-bottom: 5px;
  text-align: center;
  max-width: 600px;
  color: #555;
`;

export const Votes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VoteCount = styled.span`
  margin-left: 5px;
  color: #666;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Loader = styled.img`
  width: 100px;
  height: 100px;
`;

export const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 15px;
  font-size: 16px;
  color: #fff;
  background-color: #5398cd;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #608bb6;
  }
`;


