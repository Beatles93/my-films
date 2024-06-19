import styled from "styled-components";

export const HomeContainer = styled.div`
  .moviesGrid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
  }

  .movieCard {
    position: relative;
  }

  .rating {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 0.9rem;
  }

  .moviePoster {
    width: 100%;
    height: auto;
    border-bottom: 1px solid #ddd;
  }

  @media (max-width: 768px) {
    .loader {
      width: 75px;
      height: 75px;
    }
  }

  @media (max-width: 480px) {
    .loader {
      width: 50px;
      height: 50px;
    }
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd;
`;







