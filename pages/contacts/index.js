import Head from "next/head";
import Nav from "../../components/nav/Nav";
import Container from "../../components/layout/Container";
import MainHeader from "../../components/typography/MainHeader";
import Footer from "../../components/footer/Footer";

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

				<h2 className="text-2xl font-medium">Get in touch with me</h2>

				<ul className="mt-4 list-inside list-disc">
					<li>
						Phone number:{" "}
						<a href="tel:0853866630" className="text-blue-600 hover:underline">
							0853866630
						</a>
					</li>
					<li>
						Email:{" "}
						<a
							href="mailto:duongquanghung749@gmail.com"
							className="text-blue-600 hover:underline"
						>
							duongquanghung749@gmail.com
						</a>
					</li>
					<li>
						<a
							href="https://github.com/qhungg289"
							className="text-blue-600 hover:underline"
						>
							GitHub
						</a>
					</li>
					<li>
						<a
							href="https://facebook.com/qhungg289"
							className="text-blue-600 hover:underline"
						>
							Facebook
						</a>
					</li>
					<li>
						<a
							className="text-blue-600 hover:underline"
							href="https://www.twitter.com/qhungg289"
						>
							Twitter
						</a>
					</li>
				</ul>
			</Container>

			<Footer />
		</>
	);
}
