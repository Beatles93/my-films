import styled from "styled-components";

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const StarIcon = styled.i`
  color: #ffd700; 
  font-size: 20px;
  margin-right: 5px;

  &:last-child {
    margin-right: 0;
  }

  &:hover,
  &:hover ~ & {
    color: #ffa500; 
  }
`;
