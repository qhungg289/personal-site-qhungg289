import Head from "next/head";
import { motion } from "framer-motion";
import GridCardContainer from "../../components/layout/GridCardContainer";
import InfoCard from "../../components/card/InfoCard";
import SkillCard from "../../components/card/SkillCard";
import Layout from "../../components/layout/Layout";
import MainHeader from "../../components/typography/MainHeader";

const infos = {
	Major: "Information Technology",
	Country: "Vietnam",
	City: "Chau Doc",
};

const skills = {
	Languages: [
		"HTML5",
		"CSS3",
		"JavaScript",
		"TypeScript",
		"Node.js",
		"Python",
		"PHP",
	],
	"Front-end Technologies": ["React.js", "Next.js", "Vue.js", "Tailwind CSS"],
	"Back-end Technologies": [
		"Express.js",
		"Nest.js",
		"Laravel",
		"MySQL",
		"MongoDB",
	],
	Other: ["Git", "Figma"],
};

let infosCards = [];
for (const [key, value] of Object.entries(infos)) {
	const card = <InfoCard cardLabel={key} cardContent={value} key={key} />;
	infosCards.push(card);
}

let skillsCards = [];
for (const [key, value] of Object.entries(skills)) {
	const card = <SkillCard cardLabel={key} cardContent={value} key={key} />;
	skillsCards.push(card);
}

export default function About() {
	return (
		<>
			<Head>
				<title>About - Hung Duong Quang</title>
				<meta name="description" content="Hung Duong Quang's personal site" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<MainHeader>About</MainHeader>

				<div>
					<motion.h1
						initial={{ opacity: 0, x: 10 }}
						animate={{ opacity: 1, x: 0 }}
						className="relative my-4 flex select-none items-end gap-2 text-2xl font-semibold after:absolute after:left-0 after:bottom-1 after:-z-10 after:h-3 after:w-20 after:rounded-full after:bg-teal-200 after:transition-all hover:after:w-44"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="inline-flex h-12 w-12"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={1.75}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
							/>
						</svg>
						About Me
					</motion.h1>
					<GridCardContainer>{infosCards}</GridCardContainer>
				</div>

				<div>
					<motion.h1
						initial={{ opacity: 0, x: 10 }}
						animate={{ opacity: 1, x: 0 }}
						className="relative my-4 flex select-none items-end gap-2 text-2xl font-semibold after:absolute after:left-0 after:bottom-1 after:-z-10 after:h-3 after:w-20 after:rounded-full after:bg-fuchsia-200 after:transition-all hover:after:w-32"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="inline-flex h-12 w-12"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={1.75}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
							/>
						</svg>
						Skills
					</motion.h1>
					<GridCardContainer>{skillsCards}</GridCardContainer>
				</div>
			</Layout>
		</>
	);
}
