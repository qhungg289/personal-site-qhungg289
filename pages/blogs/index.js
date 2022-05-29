import Head from "next/head";
import Layout from "../../components/layout/Layout";
import MainHeader from "../../components/typography/MainHeader";

export default function Blogs() {
	return (
		<>
			<Head>
				<title>Blogs - Hung Duong Quang</title>
				<meta name="description" content="Hung Duong Quang's personal site" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<MainHeader>Blogs</MainHeader>
			</Layout>
		</>
	);
}
