export default function HeroTitle() {
	return (
		<h1 className="w-min overflow-hidden text-6xl font-extrabold">
			I{" "}
			<span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent hover:bg-gradient-to-l">
				build
			</span>{" "}
			and{" "}
			<span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent hover:bg-gradient-to-l">
				design
			</span>{" "}
			a better experience.
		</h1>
	);
}
