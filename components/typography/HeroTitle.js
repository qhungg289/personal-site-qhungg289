import { motion } from "framer-motion";

export default function HeroTitle() {
	return (
		<motion.h1
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			className="w-min overflow-hidden text-center text-6xl font-black text-neutral-800 sm:text-8xl"
		>
			I{" "}
			<motion.span
				whileHover={{ opacity: 0.7 }}
				className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
			>
				build
			</motion.span>{" "}
			and{" "}
			<motion.span
				whileHover={{ opacity: 0.7 }}
				className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent"
			>
				design
			</motion.span>{" "}
			a better experience.
		</motion.h1>
	);
}
