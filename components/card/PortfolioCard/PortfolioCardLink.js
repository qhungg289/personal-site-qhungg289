export default function PortfolioCardLink({ children, href }) {
	return (
		<a className="text-blue-500 hover:underline" href={href}>
			{children}
		</a>
	);
}
