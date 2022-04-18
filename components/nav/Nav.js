import NavLink from "./NavLink";

export default function Nav() {
	return (
		<nav className="w-full py-4">
			<div className="container flex h-full max-w-3xl items-center justify-between">
				<div className="space-x-3 sm:space-x-10">
					<NavLink href="/" pathName="Home" />
					<NavLink href="/portfolio" pathName="Portfolio" />
					<NavLink href="/contacts" pathName="Contacts" />
				</div>

				<button className="rounded-md border-2 p-1 transition-colors hover:border-slate-400">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
						/>
					</svg>
				</button>
			</div>
		</nav>
	);
}
