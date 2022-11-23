import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Tag = styled.span`
  text-align: start;
  writing-mode: vertical-rl;
  text-orientation: normal;
  text-transform: uppercase;
  font-family: "PT Serif", serif;
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1440px) {
    font-size: 1.5rem;
  }
`;

export const Figure = styled.figure``;

export const Image = styled.img`
  width: 100%;
  height: 17rem;

  @media (min-width: 375px) {
    width: 100%;
    height: 20rem;
  }

  @media (min-width: 425px) {
    width: 100%;
    height: 23rem;
  }

  @media (min-width: 768px) {
    width: 100%;
    height: 27rem;
  }

  @media (min-width: 992px) {
    width: 100%;
    height: 33rem;
  }
`;

export const FigCaption = styled.figcaption`
  text-align: start;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 2.1rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1440px) {
    font-size: 2rem;
  }
`;
