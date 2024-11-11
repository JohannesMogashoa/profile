import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from "./TechnologiesStyles";
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";

import React from "react";

const Technologies = () => (
	<Section id="tech">
		<SectionDivider divider />
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			Having worked with a variety of technologies, here are some that I
			have worked with the most.
		</SectionText>
		<List>
			<ListItem>
				<picture>
					<DiReact size="3rem" />
				</picture>
				<ListContainer>
					<ListTitle>Front-End</ListTitle>
					<ListParagraph>
						React.js, Vue.js, Magento PWA, <br />
						Vodapay MiniApp, Blazor WASM
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<picture>
					<DiFirebase size="3rem" />
				</picture>
				<ListContainer>
					<ListTitle>Back-End</ListTitle>
					<ListParagraph>
						NodeJS, Express, C#, .NET <br />
						Blazor Server and Databases
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<picture>
					<DiZend size="3rem" />
				</picture>
				<ListContainer>
					<ListTitle>UI/UX</ListTitle>
					<ListParagraph>Adobe XD & Figma</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
		<SectionDivider colorAlt />
	</Section>
);

export default Technologies;
