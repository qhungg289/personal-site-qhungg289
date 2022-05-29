import Nav from "../nav/Nav";
import Container from "./Container";
import Footer from "../footer/Footer";

export default function Layout({ children }) {
	return (
		<>
			<Nav />
			<Container>{children}</Container>
			<Footer />
		</>
	);
}
