export default function GridCardContainer({ children }) {
	return (
		<div className="mb-8 grid gap-y-3 md:grid-cols-3 md:gap-x-3">
			{children}
		</div>
	);
}
