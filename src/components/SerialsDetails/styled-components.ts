import styled from "styled-components";

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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

export const Poster = styled.img`
  width: 200px;
  height: 300px;
  border-radius: 12px;
  object-fit: cover;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Votes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const VoteCount = styled.div`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const BackButton = styled.button`
  background-color: #5398cd;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #608bb6;
  }
`;

