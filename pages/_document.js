import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html className="h-full">
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body className="h-full bg-slate-50 font-inter text-neutral-800">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
