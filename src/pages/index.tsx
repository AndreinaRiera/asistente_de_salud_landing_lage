import Beneficios from "@/components/Beneficios";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import ParaTodaLaFamilia from "@/components/ParaTodaLaFamilia";
import Problematica from "@/components/Problematica";
import { Box } from "@mui/material";

export default function Home() {
	return (
		<>
			<Navbar />
			<Header />
			<main>
				<Problematica />
				<Beneficios />

				<Box sx={{ backgroundColor: "primary.light" }} pt={5}>
					<ParaTodaLaFamilia />
					<Newsletter />
				</Box>
			</main>

			<Footer />
		</>
	);
}
