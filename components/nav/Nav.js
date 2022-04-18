import NavLink from "./NavLink";

export default function Nav() {
	return (
		<nav className="w-full py-4">
			<div className="container flex h-full max-w-3xl items-center justify-between">
				<div className="space-x-3 sm:space-x-10">
					<NavLink href="/" pathName="Home" />
					<NavLink href="/contacts" pathName="Contacts" />
					<NavLink href="/portfolio" pathName="Portfolio" />
				</div>
			</div>
		</nav>
	);
}
