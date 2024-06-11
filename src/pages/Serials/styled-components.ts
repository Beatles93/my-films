import styled from "styled-components";

export const SerialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContainerSerials = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: #f0f0f0;
`;

export const SerialsItem = styled.div`
  flex: 1 1 calc(100% - 40px);
  max-width: 200px;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;

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
`
export const SerialsPoster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;
