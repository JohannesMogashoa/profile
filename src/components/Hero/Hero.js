import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => {
  const handleClick = () => {};

  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Welcome To <br />
            My Personal Portfolio
          </SectionTitle>
          <SectionText>
            Solving the world's problems one line of code at a time in the
            comfort of any stack.
          </SectionText>
          <Button>
            <a
              href="Johannes-Mogashoa-Resume.pdf"
              download={"Johannes Mogashoa Resume"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Get Resume{" "}
            </a>
          </Button>
        </LeftSection>
      </Section>
    </>
  );
};

export default Hero;
