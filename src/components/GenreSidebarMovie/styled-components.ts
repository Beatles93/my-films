import styled from "styled-components";

export const GenreSidebarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 250px;
  background-color: #f0f0f0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  z-index: 1000;
`;

export const Logo = styled.div`
  background-color: #608bb6;
  color: white;
  padding: 30px 20px;
  text-align: start;
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const Title = styled.h3`
  margin: 0;
  padding: 5px 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  img {
    width: 30px;
    height: 30px;
  }
`;

export const GenreList = styled.ul`
  list-style: none;
  padding: 5px 15px;
`;

export const GenreItem = styled.li`
  padding: 8px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }

  &:active {
    background-color: #c0c0c0;
  }
`;
