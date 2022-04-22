import { motion } from "framer-motion";

export default function PortfolioCard({ children }) {
	return (
		<motion.div
			initial={{ opacity: 0, x: 10 }}
			animate={{ opacity: 1, x: 0 }}
			whileHover={{ scale: 1.05 }}
			className="flex flex-col justify-between rounded-md border bg-white p-4"
		>
			{children}
		</motion.div>
	);
}
