import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	Img,
	Tag,
	TagList,
	TitleContent,
	UtilityList,
} from "./ProjectsStyles";
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";

import { LeftSection } from "../Hero/HeroStyles";
import React from "react";
import { projects } from "../../constants/constants";

const Projects = () => (
	<Section nopadding id="projects">
		<SectionDivider />
		<SectionTitle main>Projects</SectionTitle>
		<GridContainer>
			{!projects.length ? (
				<LeftSection>
					<SectionText>
						Still in the pipeline or fighting some bugs...
					</SectionText>
				</LeftSection>
			) : (
				projects.map((p, i) => {
					return (
						<BlogCard key={i}>
							<Img src={p.image} />
							<TitleContent>
								<HeaderThree title="true">
									{p.title}
								</HeaderThree>
								<Hr />
							</TitleContent>
							<CardInfo className="card-info">
								{p.description}
							</CardInfo>
							<div>
								<TitleContent>Stack</TitleContent>
								<TagList>
									{p.tags.map((t, i) => {
										return <Tag key={i}>{t}</Tag>;
									})}
								</TagList>
							</div>
							<UtilityList>
								<ExternalLinks href={p.code}>
									Code
								</ExternalLinks>
								<ExternalLinks href={p.source}>
									Source
								</ExternalLinks>
							</UtilityList>
						</BlogCard>
					);
				})
			)}
		</GridContainer>
	</Section>
);

export default Projects;
