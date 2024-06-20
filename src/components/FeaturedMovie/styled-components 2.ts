import styled from "styled-components";

export const FeaturedMovieContainer = styled.div`
  position: relative;
  color: white;
  .backdrop {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
  .info {
    position: absolute;
    bottom: 30px;
    left: 30px;
    max-width: 600px;
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;