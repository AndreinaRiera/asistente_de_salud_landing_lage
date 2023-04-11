import Beneficios from "@/components/Beneficios";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Problematica from "@/components/Problematica";

export default function Home() {
	return (
		<>
			<Navbar />
			<Header />
			<main style={{ height: "2000px" }}>
				<Problematica />
				<Beneficios />
			</main>

			<Footer />
		</>
	);
}
