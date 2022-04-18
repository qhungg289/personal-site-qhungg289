import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Nav from "../components/nav/Nav";
import Container from "../components/layout/Container";
import avatar from "../public/img/avatar.jpg";

export default function Home() {
	return (
		<>
			<Head>
				<title>Hung Duong Quang</title>
				<meta name="description" content="Hung Duong Quang's personal site" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Nav />

			<Container>
				<div className="mt-6 overflow-hidden">
					<div className="md:flex md:flex-row-reverse md:justify-between">
						<div className="mb-8 h-24 w-24 md:h-36 md:w-36">
							<Image src={avatar} alt="Avatar" className="rounded-full" />
						</div>

						<div className="mb-8">
							<h1 className="mb-4 text-4xl font-bold md:text-5xl">
								Hung Duong Quang
							</h1>
							<p>Web Developer - Tech Enthusiast</p>
						</div>
					</div>

					<motion.h1
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: 0 }}
						className="relative mb-4 flex items-end gap-2 text-2xl font-semibold after:absolute after:left-0 after:bottom-1 after:-z-10 after:h-3 after:w-20 after:bg-teal-200"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="inline-flex h-12 w-12"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
							/>
						</svg>
						About Me
					</motion.h1>
					<div className="mb-8 grid gap-y-2 overflow-hidden md:grid-cols-3 md:gap-x-2 md:gap-y-0">
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.25 }}
							className="rounded-md border bg-white p-4"
						>
							<h2 className="text-sm text-neutral-500">Studying</h2>
							<p className="text-lg font-medium">Information Technology</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5 }}
							className="rounded-md border bg-white p-4"
						>
							<h2 className="text-sm text-neutral-500">Country</h2>
							<p className="text-lg font-medium">Vietnam</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.75 }}
							className="rounded-md border bg-white p-4"
						>
							<h2 className="text-sm text-neutral-500">City</h2>
							<p className="text-lg font-medium">Can Tho</p>
						</motion.div>
					</div>

					<motion.h1
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: 0 }}
						className="relative mb-4 flex items-end gap-2 text-2xl font-semibold after:absolute after:left-0 after:bottom-1 after:-z-10 after:h-3 after:w-20 after:bg-fuchsia-200"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="inline-flex h-12 w-12"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
							/>
						</svg>
						Skills
					</motion.h1>
					<div className="mb-8 grid gap-y-2 overflow-hidden md:grid-cols-3 md:gap-x-2 md:gap-y-2">
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.25 }}
							className="rounded-md border bg-white p-4"
						>
							<h2 className="text-sm text-neutral-500">Languages</h2>
							<ul className="list-inside list-disc divide-y-2">
								<li className="text-lg font-medium leading-relaxed">HTML5</li>
								<li className="text-lg font-medium leading-relaxed">CSS3</li>
								<li className="text-lg font-medium leading-relaxed">
									JavaScript
								</li>
								<li className="text-lg font-medium leading-relaxed">Node.js</li>
								<li className="text-lg font-medium leading-relaxed">C#/.NET</li>
								<li className="text-lg font-medium leading-relaxed">Python</li>
								<li className="text-lg font-medium leading-relaxed">Go</li>
							</ul>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5 }}
							className="rounded-md border bg-white p-4"
						>
							<h2 className="text-sm text-neutral-500">Front-end Frameworks</h2>
							<ul className="list-inside list-disc divide-y-2">
								<li className="text-lg font-medium leading-relaxed">
									React.js
								</li>
								<li className="text-lg font-medium leading-relaxed">Next.js</li>
								<li className="text-lg font-medium leading-relaxed">Vue.js</li>
							</ul>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.75 }}
							className="rounded-md border bg-white p-4"
						>
							<h2 className="text-sm text-neutral-500">Back-end Frameworks</h2>
							<ul className="list-inside list-disc divide-y-2">
								<li className="text-lg font-medium leading-relaxed">
									Express.js
								</li>
								<li className="text-lg font-medium leading-relaxed">Nest.js</li>
								<li className="text-lg font-medium leading-relaxed">
									ASP.NET Core
								</li>
							</ul>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1 }}
							className="rounded-md border bg-white p-4"
						>
							<h2 className="text-sm text-neutral-500">Others</h2>
							<ul className="list-inside list-disc divide-y-2">
								<li className="text-lg font-medium leading-relaxed">Git</li>
								<li className="text-lg font-medium leading-relaxed">Figma</li>
							</ul>
						</motion.div>
					</div>
				</div>
			</Container>
		</>
	);
}
