import Link from "next/link";

export default function Footer() {
	return (
		<footer className="container my-6 grid max-w-3xl gap-4 md:grid-cols-3">
			<div className="flex flex-col gap-4">
				<Link href="/" passHref>
					<a className="text-neutral-500 transition-all hover:text-neutral-800">
						Home
					</a>
				</Link>
				<Link href="/portfolio" passHref>
					<a className="text-neutral-500 transition-all hover:text-neutral-800">
						Portfolio
					</a>
				</Link>
				<Link href="/contacts" passHref>
					<a className="text-neutral-500 transition-all hover:text-neutral-800">
						Contacts
					</a>
				</Link>
			</div>

			<div className="flex flex-col gap-4">
				<a
					className="text-neutral-500 transition-all hover:text-neutral-800"
					href="https://www.github.com/qhungg289"
				>
					GitHub
				</a>
				<a
					className="text-neutral-500 transition-all hover:text-neutral-800"
					href="https://www.facebook.com/qhungg289"
				>
					Facebook
				</a>
				<a
					className="text-neutral-500 transition-all hover:text-neutral-800"
					href="https://www.twitter.com/qhungg289"
				>
					Twitter
				</a>
			</div>
		</footer>
	);
}
