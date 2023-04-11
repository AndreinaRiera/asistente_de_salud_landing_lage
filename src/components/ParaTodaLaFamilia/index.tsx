import { Grid, Typography } from "@mui/material";

type Props = {};

function ParaTodaLaFamilia({}: Props) {
	return (
		<Grid container alignItems={"center"}>
			<Grid item xs={12} textAlign={"center"}>
				<Typography fontWeight={"bold"}>
					¡Asistente de salud es para ti, para tus hijos, tus padres, y toda tu
					familia!
				</Typography>
				<Typography>
					Optimiza la gestión de tu salud de manera fácil, rápida y segura.
					Optimiza tu vida.
				</Typography>
			</Grid>
			<Grid item xs={12} textAlign={"center"}>
				<img
					src={`/images/beneficios/familia.png`}
					alt=".."
					style={{
						width: "400px",
						maxWidth: "100%",
					}}
				/>
			</Grid>
		</Grid>
	);
}

export default ParaTodaLaFamilia;
