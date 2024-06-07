import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: #5398cd;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

export const CenterContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 20px;
  border: 2px solid #ccc;
  background-color: #f9f9f9;
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #608bb6;
    box-shadow: 0 2px 8px rgba(0, 123, 255, 0.3);
  }

  &::placeholder {
    color: #999;
  }
`;


