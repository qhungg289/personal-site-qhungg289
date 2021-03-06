import Head from "next/head";
import Layout from "../../components/layout/Layout";
import MainHeader from "../../components/typography/MainHeader";

export default function Contacts() {
	return (
		<>
			<Head>
				<title>Contacts - Hung Duong Quang</title>
				<meta name="description" content="Hung Duong Quang's personal site" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<MainHeader>Contacts</MainHeader>

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
			</Layout>
		</>
	);
}
