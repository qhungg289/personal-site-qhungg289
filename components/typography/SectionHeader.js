import { motion } from "framer-motion";

export default function SectionHeader({ accentColor, children }) {
	return (
		<motion.h1
			initial={{ opacity: 0, x: 10 }}
			animate={{ opacity: 1, x: 0 }}
			className={`relative my-4 flex select-none items-end gap-2 text-2xl font-semibold after:absolute after:left-0 after:bottom-1 after:-z-10 after:h-3 after:w-20 after:bg-${accentColor}-200 after:transition-all hover:after:w-32`}
		>
			{children}
		</motion.h1>
	);
}
