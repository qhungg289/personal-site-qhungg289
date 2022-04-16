export default function BackgroundImage() {
	return (
		<>
			<div className="absolute inset-0 -z-10 bg-hero bg-cover bg-center"></div>
			<div className="absolute inset-0 -z-[5] bg-gradient-to-b from-transparent to-slate-50"></div>
		</>
	);
}
