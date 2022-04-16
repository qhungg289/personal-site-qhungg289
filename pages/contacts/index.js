import Head from "next/head";
import Nav from "../../components/nav/Nav";

export default function Contacts() {
	return (
		<>
			<Head>
				<title>Contacts - Hung Duong Quang</title>
				<meta name="description" content="Hung Duong Quang's personal site" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Nav />
			<h1>Contact</h1>
		</>
	);
}
