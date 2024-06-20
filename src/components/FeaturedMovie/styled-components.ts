import styled from "styled-components";

export const FeaturedMovieContainer = styled.div`
  position: relative;
  color: #333; 
  margin-bottom: 40px;

  .backdrop {
    margin-top: 40px;
    width: 100%;
    height: 60vh;
    object-fit: cover;
    border-radius: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .info {
    position: absolute;
    bottom: 30px;
    left: 30px;
    max-width: 600px;
    background-color: rgba(255, 255, 255, 0.9); /* Светлый фон */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    h1 {
      font-size: 2.5rem;
      margin: 0;
      color: #5398cd; /* Цвет заголовка */
    }

    p {
      font-size: 1.2rem;
      margin: 10px 0 0 0;
      color: #666; /* Цвет текста */
    }
  }

  @media (max-width: 768px) {
    .info {
      padding: 15px;
      h1 {
        font-size: 2rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 480px) {
    .info {
      padding: 10px;
      h1 {
        font-size: 1.5rem;
      }
      p {
        font-size: 0.9rem;
      }
    }
  }
`;
