import {
	AiFillGithub,
	AiFillLinkedin,
	AiFillTwitterSquare,
} from "react-icons/ai";
import {
	Container,
	Div1,
	Div2,
	Div3,
	NavLink,
	SocialIcons,
} from "./HeaderStyles";

import { DiCssdeck } from "react-icons/di";
import Link from "next/link";
import React from "react";

const Header = () => (
	<Container>
		<Div1>
			<Link
				href="/"
				style={{
					display: "flex",
					alignItems: "center",
					color: "white",
				}}
			>
				<DiCssdeck size="3rem" /> <span>Kode Stallion</span>
			</Link>
		</Div1>
		<Div2>
			<li>
				<Link href="#about">
					<NavLink>About</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#articles">
					<NavLink>Articles</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#tech">
					<NavLink>Technologies</NavLink>
				</Link>
			</li>
		</Div2>
		<Div3>
			<SocialIcons href="https://www.github.com/JohannesMogashoa">
				<AiFillGithub size="3rem" />
			</SocialIcons>
			<SocialIcons href="https://www.linkedin.com/in/johannes-mogashoa-358416190">
				<AiFillLinkedin size="3rem" />
			</SocialIcons>
			<SocialIcons href="https://www.twitter.com/iam_johannesm">
				<AiFillTwitterSquare size="3rem" />
			</SocialIcons>
		</Div3>
	</Container>
);

export default Header;
