import Acomplishments from "../components/Acomplishments/Acomplishments";
import Articles from "../components/Articles/Articles";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import { Layout } from "../layout/Layout";
import Projects from "../components/Projects/Projects";
import { Section } from "../styles/GlobalComponents";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";

const Home = () => {
	return (
		<Layout>
			<Section grid>
				<Hero />
				<BgAnimation />
			</Section>
			<Timeline />
			<Articles />
			<Technologies />
			<Projects />
			{/* <Acomplishments /> */}
		</Layout>
	);
};

export default Home;
