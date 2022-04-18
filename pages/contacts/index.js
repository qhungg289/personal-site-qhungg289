import Head from "next/head";
import Nav from "../../components/nav/Nav";
import Container from "../../components/layout/Container";
import MainHeader from "../../components/typography/MainHeader";

export default function Contacts() {
	return (
		<>
			<Head>
				<title>Contacts - Hung Duong Quang</title>
				<meta name="description" content="Hung Duong Quang's personal site" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Nav />
			<Container>
				<MainHeader>Contacts</MainHeader>
			</Container>
		</>
	);
}
