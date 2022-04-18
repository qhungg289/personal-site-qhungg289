import Head from "next/head";
import Container from "../../components/layout/Container";
import Nav from "../../components/nav/Nav";
import MainHeader from "../../components/typography/MainHeader";

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
			</Container>
		</>
	);
}
