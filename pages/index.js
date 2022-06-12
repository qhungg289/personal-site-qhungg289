import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import Avatar from "../components/image/Avatar";
import MainHeader from "../components/typography/MainHeader";

export default function Home() {
	return (
		<>
			<Head>
				<title>Hung Duong Quang</title>
				<meta name="description" content="Hung Duong Quang's personal site" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<div className="flex min-h-[calc(100vh-6rem)] flex-col justify-center md:flex-row md:items-center md:justify-between">
					<Avatar />

					<div>
						<MainHeader>
							&gt; Hung Duong Quang{" "}
							<span className="animate-breath text-blue-600">_</span>
						</MainHeader>
						<p className="mb-2 font-medium">
							Web Developer - Tech Enthusiast - College Student
						</p>
						<p className="mb-6 text-slate-500 md:w-[45ch]">
							A passionate college student who love programming and technology
							in general. Especially about{" "}
							<span className="font-medium text-blue-500 underline decoration-dashed underline-offset-2">
								Web
							</span>{" "}
							and{" "}
							<span className="font-medium text-blue-500 underline decoration-dashed underline-offset-2">
								Game
							</span>{" "}
							development.
						</p>
						<div>
							<Link href="/about" passHref>
								<a className="group flex w-max flex-row items-center rounded-full bg-blue-600 px-6 py-2 font-semibold text-white shadow-md shadow-blue-600/50 transition-all hover:opacity-80">
									<span>About Me</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 transition-all group-hover:translate-x-1"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
											clipRule="evenodd"
										/>
									</svg>
								</a>
							</Link>
						</div>
					</div>

					<div className="absolute -left-32 bottom-80 -z-10 h-64 w-64 rounded-full bg-slate-200 md:left-0 md:-bottom-10 md:rounded-none md:rounded-tr-full"></div>
				</div>
			</Layout>
		</>
	);
}
