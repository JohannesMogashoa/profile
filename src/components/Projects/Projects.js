import React from 'react';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { LeftSection } from '../Hero/HeroStyles';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {!projects.length ? (
        <LeftSection>
          <SectionText>Still fighting bugs...</SectionText>
        </LeftSection>
      ) : (
        projects.map((p, i) => {
          return (
            <BlogCard key={i}>
              <Img src={p.image} />
              <TitleContent>
                <HeaderThree title="true">{p.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo className="card-info">{p.description}</CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {p.tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                  })}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={p.code}>Code</ExternalLinks>
                <ExternalLinks href={p.source}>Source</ExternalLinks>
              </UtilityList>
            </BlogCard>
          );
        })
      )}
    </GridContainer>
  </Section>
);

export default Projects;
