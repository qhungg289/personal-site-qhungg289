import NavLink from "./NavLink";
import Link from "next/link";

export default function Nav() {
	return (
		<nav className="fixed flex w-full items-center justify-between border-b-2 bg-white/50 p-4 backdrop-blur-md">
			<div className="space-x-5">
				<NavLink href="/" pathName="Home" />
				<NavLink href="/about" pathName="About" />
				<NavLink href="/contacts" pathName="Contacts" />
			</div>

			<div>
				<Link href={"/portfolio"} passHref>
					<a className="flex items-center gap-2 rounded-md border-2 border-blue-600 bg-blue-600 py-2 px-4 text-white transition-all hover:bg-transparent hover:text-blue-600">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
							<path
								fillRule="evenodd"
								d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
								clipRule="evenodd"
							/>
						</svg>
						Portfolio
					</a>
				</Link>
			</div>
		</nav>
	);
}