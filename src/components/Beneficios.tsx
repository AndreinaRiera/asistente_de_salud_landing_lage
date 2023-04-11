import { Box, Container, Grid, Typography, useTheme } from "@mui/material";

const Beneficio = ({
	image,
	children,
}: {
	image: { src: string; alt: string };
	children: JSX.Element | JSX.Element[] | string;
}) => {
	return (
		<Grid container>
			<Grid item xs>
				{children}
			</Grid>
			<Grid item xs={"auto"}>
				<img
					src={`/images/beneficios/${image.src}`}
					alt={image.alt}
					style={{
						width: "400px",
						maxWidth: "100%",
					}}
				/>
			</Grid>
		</Grid>
	);
};

type BeneficiosProps = {};

function Beneficios({}: BeneficiosProps) {
	const theme = useTheme();

	return (
		<Box mt={5} py={5} sx={{ backgroundColor: "grey.200" }}>
			<Container>
				<Typography
					variant="h2"
					component="h2"
					textAlign={"center"}
					fontWeight={"bold"}
					mb={2}
				>
					¡Con{" "}
					<span style={{ color: theme.palette.primary.dark }}>
						asistente de salud
					</span>{" "}
					puedes agendar turnos tener seguimiento de tus consultas medicas,
					conocer tu historial medico, y mucho mas!
				</Typography>

				<Beneficio
					image={{
						src: "images/",
						alt: "alt",
					}}
				>
					test
				</Beneficio>
			</Container>
		</Box>
	);
}

export default Beneficios;
