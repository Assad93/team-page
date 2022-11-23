import React from "react";
import { Container, Description, Footer, Header, Main, Title } from "./styles";

import bill from "../../assets/images/bill-mahoney.jpg";
import griff from "../../assets/images/griff-richards.jpg";
import saba from "../../assets/images/saba-cabrera.jpg";
import shae from "../../assets/images/shae-le.jpg";
import skylah from "../../assets/images/skylah-lu.jpg";
import stan from "../../assets/images/stan-john.jpg";
import Member from "../../components/Member";

export default function MyTeam() {
  return (
    <Container>
      <Header>
        <Title>The creative crew</Title>
        <Description>
          <h2>who we are</h2>
          <p>
            We are team of creatively diverse, driven, innovative individuals
            working in various locations from the world.
          </p>
        </Description>
      </Header>
      <Main>
        <Member image={bill} name={"Bill Mahoney"} tag={"product owner"} />
        <Member image={saba} name={"Saba Cabrera"} tag={"art director"} />
        <Member image={shae} name={"Shae Le"} tag={"techlead"} />
        <Member image={skylah} name={"Skylah Lu"} tag={"ux designer"} />
        <Member image={griff} name={"Griff Richards"} tag={"developer"} />
        <Member image={stan} name={"Stan John"} tag={"developer"} />
      </Main>
      <Footer>
        <p>
          created by <span>Samir</span> - devChallenges.io
        </p>
      </Footer>
    </Container>
  );
}
