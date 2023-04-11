import { Box, Grid, Typography } from "@mui/material";
import main_header from "./styles.module.css";

function Header() {
	return (
		<>
			<Box
				component={"header"}
				sx={{
					padding: "80px",
					marginTop: "-1px",
				}}
				id={main_header.main_header}
			>
				<Grid container id={main_header.main_header_container}>
					<Grid item xs={12} md alignItems={"center"} display={"flex"}>
						<Typography
							variant="h1"
							component="h1"
							sx={{ fontSize: "6rem", mb: "30px" }}
							maxWidth={"900px"}
						>
							¡Toma el control de la gestión de tu salud!
						</Typography>
					</Grid>
					<Grid item xs={12} md="auto">
						<img
							src="/images/header_picture.png"
							alt="Mujer relajada porque gestiona su salud con su asistente de salud personal"
						/>
					</Grid>
				</Grid>
			</Box>
		</>
	);
}

export default Header;
