import { Box, Container, Grid } from "@mui/material";

function Footer() {
	return (
		<Box
			component={"footer"}
			py={4}
			px={0}
			sx={{ backgroundColor: "primary.dark" }}
		>
			<Container>
				<Grid container textAlign={"center"}>
					<Grid item xs={12}>
						© {new Date().getFullYear()} Andreina Riera
					</Grid>
					<Grid item xs={12}>
						<a href="mailto:consultas@asistentedesalud.online">
							consultas@asistentedesalud.online
						</a>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}

export default Footer;
