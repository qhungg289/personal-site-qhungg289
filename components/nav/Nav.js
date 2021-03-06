import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavLink from "./NavLink";

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="w-full py-4">
			<div className="container flex h-full max-w-3xl items-center justify-between">
				<button onClick={() => setIsOpen(true)} className="md:hidden">
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
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>

				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 z-10 flex flex-col items-center justify-evenly bg-slate-100"
						>
							<NavLink href="/" pathName="Home" />
							<NavLink href="/about" pathName="About" />
							<NavLink href="/portfolio" pathName="Portfolio" />
							<NavLink href="/contacts" pathName="Contacts" />

							<button onClick={() => setIsOpen(false)}>
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
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</motion.div>
					)}
				</AnimatePresence>

				<div className="hidden space-x-3 sm:space-x-10 md:block">
					<NavLink href="/" pathName="Home" />
					<NavLink href="/about" pathName="About" />
					<NavLink href="/portfolio" pathName="Portfolio" />
					<NavLink href="/contacts" pathName="Contacts" />
				</div>
			</div>
		</nav>
	);
}
