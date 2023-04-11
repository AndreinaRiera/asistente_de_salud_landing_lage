import { Container, Grid, Typography } from "@mui/material";

type Props = {};

function Problematica({}: Props) {
	return (
		<Container>
			<>
				<Typography
					variant="h2"
					component="h2"
					textAlign={"center"}
					fontWeight={"bold"}
					mb={2}
				>
					¿Como organizas todo lo relacionado a tu salud?
				</Typography>

				<Grid container alignItems={"center"} gap={"30px"}>
					<Grid item xs={"auto"}>
						<img
							src="/images/problematica/sin_fondo.png"
							alt="Mujer estresada porque no gestiona su salud apropiadamente"
							style={{
								width: "400px",
								maxWidth: "100%",
							}}
						/>
					</Grid>
					<Grid item xs>
						<Typography variant="body1" component="p">
							¿Sabes cada cuánto tiempo debes ir al ginecólogo o urólogo? <br />{" "}
							¿Ya te realizaste todos los chequeos médicos rutinarios que
							deberías hacerte? <br /> ¿Tu hijo tiene todas sus vacunas y
							exámenes al día?
						</Typography>
						<Typography variant="body1" component="p" mt={1}>
							Si no lo sabes con certeza, no te preocupes. No te pasa solo a ti.
							Sabemos lo difícil que es. ¡Pero puede ser más fácil!
						</Typography>
					</Grid>
				</Grid>
			</>
		</Container>
	);
}

export default Problematica;
