import Head from "next/head";
import Container from "../../components/layout/Container";
import Nav from "../../components/nav/Nav";
import MainHeader from "../../components/typography/MainHeader";
import Footer from "../../components/footer/Footer";
import GridCardContainer from "../../components/layout/GridCardContainer";
import PortfolioCard from "../../components/card/PortfolioCard/PortfolioCard";
import PortfolioCardLink from "../../components/card/PortfolioCard/PortfolioCardLink";
import PortfolioCardHeading from "../../components/card/PortfolioCard/PortfolioCardHeading";
import PortfolioCardContent from "../../components/card/PortfolioCard/PortfolioCardContent";

export default function Portfolio() {
	return (
		<>
			<Head>
				<title>Portfolio - Hung Duong Quang</title>
				<meta name="description" content="Hung Duong Quang's personal site" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Nav />

			<Container>
				<MainHeader>Portfolio</MainHeader>

				<GridCardContainer>
					<PortfolioCard>
						<div className="mb-4 space-y-2">
							<PortfolioCardHeading>Member Only</PortfolioCardHeading>

							<PortfolioCardContent>
								A message board with member status. Only show message&apos;s
								author to user with member access, also have an Admin account to
								moderate all the messages.
							</PortfolioCardContent>
							<PortfolioCardContent>
								Using <b>Node.js</b> with <b>Express</b> and <b>MongoDB</b>.
							</PortfolioCardContent>
						</div>

						<div className="space-x-4">
							<PortfolioCardLink href="https://safe-chamber-24215.herokuapp.com/">
								Preview
							</PortfolioCardLink>
							<PortfolioCardLink href="https://github.com/qhungg289/members-only">
								Code
							</PortfolioCardLink>
						</div>
					</PortfolioCard>

					<PortfolioCard>
						<div className="mb-4 space-y-2">
							<PortfolioCardHeading>Blog API</PortfolioCardHeading>

							<PortfolioCardContent>
								REST API for making a blogging website. Support JWT
								authorization.
							</PortfolioCardContent>
							<PortfolioCardContent>
								Using <b>Node.js</b> with <b>Express</b> and <b>MongoDB</b>.
							</PortfolioCardContent>
						</div>

						<div className="space-x-4">
							<PortfolioCardLink href="https://github.com/qhungg289/blog-api">
								Code
							</PortfolioCardLink>
						</div>
					</PortfolioCard>

					<PortfolioCard>
						<div className="mb-4 space-y-2">
							<PortfolioCardHeading>Weather</PortfolioCardHeading>

							<PortfolioCardContent>
								Simple front-end to consume <b>Open Weather API</b> and display
								some basic information about current weather at specific
								location.
							</PortfolioCardContent>
						</div>

						<div className="space-x-4">
							<PortfolioCardLink href="https://weather289.netlify.app/">
								Preview
							</PortfolioCardLink>
							<PortfolioCardLink href="https://github.com/qhungg289/weather">
								Code
							</PortfolioCardLink>
						</div>
					</PortfolioCard>

					<PortfolioCard>
						<div className="mb-4 space-y-2">
							<PortfolioCardHeading>Wordle Clone</PortfolioCardHeading>

							<PortfolioCardContent>
								A clone of a famous Wordle game.
							</PortfolioCardContent>
							<PortfolioCardContent>
								Using <b>TypeScript</b>.
							</PortfolioCardContent>
						</div>

						<div className="space-x-4">
							<PortfolioCardLink href="https://wordle-clone-289.netlify.app/">
								Preview
							</PortfolioCardLink>
							<PortfolioCardLink href="https://github.com/qhungg289/wordle-clone">
								Code
							</PortfolioCardLink>
						</div>
					</PortfolioCard>

					<PortfolioCard>
						<div className="mb-4 space-y-2">
							<PortfolioCardHeading>Battleship</PortfolioCardHeading>

							<PortfolioCardContent>
								A classic Battleship game on the web.
							</PortfolioCardContent>
							<PortfolioCardContent>
								Made for practice <b>TDD (Test Driven Development)</b>.
							</PortfolioCardContent>
						</div>

						<div className="space-x-4">
							<PortfolioCardLink href="https://qhungg289.github.io/battleship/">
								Preview
							</PortfolioCardLink>
							<PortfolioCardLink href="https://github.com/qhungg289/battleship">
								Code
							</PortfolioCardLink>
						</div>
					</PortfolioCard>

					<PortfolioCard>
						<div className="mb-4 space-y-2">
							<PortfolioCardHeading>Personal Site</PortfolioCardHeading>

							<PortfolioCardContent>
								Repository of this site.
							</PortfolioCardContent>
							<PortfolioCardContent>
								Using <b>Next.js</b> with <b>Tailwind CSS</b>.
							</PortfolioCardContent>
						</div>

						<div className="space-x-4">
							<PortfolioCardLink href="https://github.com/qhungg289/personal-site-qhungg289">
								Code
							</PortfolioCardLink>
						</div>
					</PortfolioCard>
				</GridCardContainer>
			</Container>

			<Footer />
		</>
	);
}
