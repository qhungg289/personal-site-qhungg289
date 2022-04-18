import { motion } from "framer-motion";

export default function SkillCard({ cardLabel, cardContent }) {
	return (
		<motion.div
			initial={{ opacity: 0, x: 10 }}
			animate={{ opacity: 1, x: 0 }}
			whileHover={{ scale: 1.05 }}
			className="rounded-md border bg-white p-4"
		>
			<h2 className="text-sm text-neutral-500">{cardLabel}</h2>
			<ul className="list-inside list-disc divide-y-2">
				{cardContent.map((skill) => (
					<li className="text-lg font-medium leading-relaxed" key={skill}>
						{skill}
					</li>
				))}
			</ul>
		</motion.div>
	);
}
