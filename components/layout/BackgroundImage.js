import { motion } from "framer-motion";

export default function BackgroundImage() {
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="absolute inset-0 -z-20 bg-hero bg-cover bg-center"
			></motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-slate-50"
			></motion.div>
		</>
	);
}
