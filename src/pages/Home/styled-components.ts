import styled from "styled-components";

export const HomeContainer = styled.div`
  .movieCard {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
    margin-bottom: 40px;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    }
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
    border-radius: 12px;
    object-fit: cover;
    border-bottom: 1px solid #ddd;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
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
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;



