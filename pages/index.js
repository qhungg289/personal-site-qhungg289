import Head from "next/head";
import Link from "next/link";
import Nav from "../components/nav/Nav";
import Container from "../components/layout/Container";
import HeroTitle from "../components/typography/HeroTitle";
import BackgroundImage from "../components/layout/BackgroundImage";

export default function Home() {
	return (
		<>
			<Head>
				<title>Hung Duong Quang</title>
				<meta name="description" content="Hung Duong Quang's personal site" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<BackgroundImage />

			<Nav />

			<Container>
				<div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center gap-6">
					<HeroTitle />

					<div className="flex space-x-6">
						<Link href={"/portfolio"} passHref>
							<a className="flex transform-gpu items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-white shadow-md shadow-blue-500/50 transition-all hover:-translate-y-1 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-400/50">
								View My Works
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							</a>
						</Link>

						<Link href={"/about"} passHref>
							<a className="transform-gpu rounded-md bg-white px-3 py-2 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg focus:shadow-lg">
								About Me
							</a>
						</Link>
					</div>
				</div>
			</Container>
		</>
	);
}
