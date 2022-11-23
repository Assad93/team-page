import React from "react";
import { Container, FigCaption, Figure, Image, Tag } from "./styles";

interface IMember {
  image: string;
  name: string;
  tag: string;
}

export default function Member({ image, name, tag }: IMember) {
  return (
    <Container>
      <Figure>
        <Image src={image} alt={`${tag} ${name}`} />
        <FigCaption>{name}</FigCaption>
      </Figure>
      <Tag>{tag}</Tag>
    </Container>
  );
}
