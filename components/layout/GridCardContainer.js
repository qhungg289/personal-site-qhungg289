export default function GridCardContainer({ children }) {
	return (
		<div className="mb-8 grid gap-y-2 md:grid-cols-3 md:gap-x-2">
			{children}
		</div>
	);
}
