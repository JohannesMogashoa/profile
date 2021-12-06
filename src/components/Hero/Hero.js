import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Solving the world's problems one line of code at a time in the comfort of any stack.
        </SectionText>
        <Button onClick={props.handleClick}>Get Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
