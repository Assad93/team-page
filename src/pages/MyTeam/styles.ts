import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  margin: 0 auto;
`;

export const Header = styled.header`
  margin: 3rem 0;

  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Main = styled.main`
  margin: 1rem auto;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  gap: 2rem;

  & > div:nth-child(2n) {
    margin: 2rem 0px 0px;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;

    & > div:nth-child(3n - 1) {
      margin: 4rem 0px 0px;
    }
  }
`;

export const Footer = styled.footer`
  font-family: "Montserrat", sans-serif;
  height: 5vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: var(--gray);
  font-weight: 500;
  line-height: 1.7rem;

  span {
    font-weight: bold;
  }

  @media (min-width: 768px) {
    padding: 0.1rem;
  }

  @media (min-width: 1440px) {
    p {
      font-size: 1.8rem;
    }
  }
`;

export const Title = styled.h1`
  margin: 0 0 3rem;
  font-family: "PT Serif", serif;
  font-weight: 700;
  font-size: 3.6rem;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

export const Description = styled.div`
  font-family: "Poppins", sans-serif;
  max-width: 500px;
  & > h2 {
    font-weight: 600;
    font-size: 1.8rem;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
  }

  & > p {
    line-height: 2.1rem;
  }

  @media (min-width: 768px) {
    & > h2 {
      font-size: 2.5rem;
    }

    & > p {
      font-size: 1.8rem;
    }
  }
`;
