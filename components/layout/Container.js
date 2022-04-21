import { motion } from "framer-motion";

export default function Container({ children }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="container mt-6 max-w-3xl"
		>
			{children}
		</motion.div>
	);
}
