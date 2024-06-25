import styled from "styled-components";

export const TvShowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerTvShow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: #f0f0f0;
`;

export const TvShowItem = styled.div`
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

export const TvShowPoster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

export const HeartIcon = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(255, 255, 255, 0.7);
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
  height: 80vh;
`;

export const Loader = styled.img`
  width: 100px;
  height: 100px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const PaginationButton = styled.button`
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 10px 15px;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const PaginationSpan = styled.span`
  padding: 10px 15px;
`;

export const ActivePageButton = styled(PaginationButton)`
  background-color: #000000;
  color: #ffffff;
`;

export const ToggleIcon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin: 20px 0;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const SidebarGenresContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 80%;
  padding: 20px;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    width: 300px;
    position: relative;
    top: 0;
    left: 0;
    transform: none;
    box-shadow: none;
  }
`;

