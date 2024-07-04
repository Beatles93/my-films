import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: #f0f0f0;
`;

export const MovieItem = styled.div`
  flex: 1 1 calc(100% - 40px);
  max-width: 200px;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 768px) {
    flex: 1 1 calc(33.33% - 40px);
    max-width: 30%;
  }

  @media (min-width: 1024px) {
    flex: 1 1 calc(25% - 40px);
    max-width: 22%;
  }

  @media (min-width: 1280px) {
    flex: 1 1 calc(20% - 40px);
    max-width: 18%;
  }

  @media (min-width: 1600px) {
    flex: 1 1 calc(16.66% - 40px);
    max-width: 15%;
  }

  @media (min-width: 1920px) {
    flex: 1 1 calc(16.66% - 40px);
    max-width: 15%;
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

export const HeartIcon = styled.div<{ isFavorite: boolean }>`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: ${({ isFavorite }) => (isFavorite ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.7)")};
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }
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

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  gap: 5px;
`;

export const PaginationButton = styled.button`
  background-color: #5398cd;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #608bb6;
  }
`;

export const PaginationSpan = styled.span`
  background-color: transparent;
  color: #000;
  cursor: default;
`;

export const ActivePageButton = styled(PaginationButton)`
  background-color: #5398cd !important;
`;

export const ToggleIcon = styled.img`
  position: fixed;
  top: 100px;
  left: 5px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 1000;
`;
