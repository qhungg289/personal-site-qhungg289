import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400;500;600;700&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@700&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<body className="relative bg-slate-100 font-ibm-plex-sans text-slate-800 antialiased">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
