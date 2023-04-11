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
					<Grid
						item
						xs={12}
						md
						alignItems={"center"}
						display={"flex"}
						direction={"column"}
						justifyContent={"center"}
					>
						<Grid container>
							<Grid item>
								<Typography
									variant="h1"
									component="h1"
									sx={{ fontSize: "6rem", mb: "30px" }}
									maxWidth={"900px"}
								>
									¡Toma el control de la gestión de tu salud!
								</Typography>
							</Grid>
						</Grid>

						<Grid container mt={2} gap={"20px"}>
							{[
								{
									href: "https://www.tiktok.com/@andreinariera1996",
									img: "/images/redes sociales/tik-tok.png",
								},
								{
									href: "https://www.instagram.com/asistentedesalud/?igshid=ZDdkNTZiNTM%3D",
									img: "/images/redes sociales/instagram.png",
								},
								{
									href: "https://www.twitch.tv/andreinariera/about",
									img: "/images/redes sociales/twitch.png",
								},
							].map(({ href, img }, index) => (
								<Grid key={index} item xs={"auto"}>
									<a href={href} target="_blank" rel="noopener noreferrer">
										<img
											src={img}
											alt="..."
											width={"35px"}
											style={{ opacity: "0.5" }}
										/>
									</a>
								</Grid>
							))}
						</Grid>
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
