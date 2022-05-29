import Head from "next/head";
import Nav from "../../components/nav/Nav";
import Container from "../../components/layout/Container";
import Footer from "../../components/footer/Footer";
import MainHeader from "../../components/typography/MainHeader";

export default function Blogs() {
	return (
		<>
			<Head>
				<title>Blogs - Hung Duong Quang</title>
				<meta name="description" content="Hung Duong Quang's personal site" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Nav />

			<Container>
				<MainHeader>Blogs</MainHeader>
			</Container>

			<Footer />
		</>
	);
}
