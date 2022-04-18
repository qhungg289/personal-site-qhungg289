import { motion } from "framer-motion";

export default function InfoCard({ cardLabel, cardContent }) {
	return (
		<motion.div
			initial={{ opacity: 0, x: 10 }}
			animate={{ opacity: 1, x: 0 }}
			whileHover={{ scale: 1.05 }}
			className="rounded-md border bg-white p-4"
		>
			<h2 className="text-sm text-neutral-500">{cardLabel}</h2>
			<p className="text-lg font-medium">{cardContent}</p>
		</motion.div>
	);
}
