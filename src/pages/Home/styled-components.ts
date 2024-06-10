import styled from "styled-components";

export const HomeContainer = styled.div`
  .appHeader {
    width: 100%;
    height: 100%;
  }

  .imgBody {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .imgHeader {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .loaderContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
  }

  .loader {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 768px) {
    .imgHeader {
      object-fit: contain;
    }

    .loader {
      width: 75px;
      height: 75px;
    }
  }

  @media (max-width: 480px) {
    .imgHeader {
      object-fit: scale-down;
    }

    .loader {
      width: 50px;
      height: 50px;
    }
  }
`;



