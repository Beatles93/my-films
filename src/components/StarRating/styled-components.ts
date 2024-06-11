import styled from "styled-components";

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StarIcon = styled.i`
  color: #ffd700; // gold color for the stars
  font-size: 20px;
  margin-right: 5px;

  &:last-child {
    margin-right: 0;
  }
`;
