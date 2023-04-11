import { Box, Container, Grid, Typography, useTheme } from "@mui/material";

const Beneficio = ({
	image,
	children,
}: {
	image: { src: string; alt: string };
	children: JSX.Element | JSX.Element[] | string;
}) => {
	return (
		<Grid container alignItems={"center"} mt={4}>
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
		<Box mt={5} py={5} sx={{ backgroundColor: "grey.200" }} id="Beneficios">
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
						src: "perfil, analisis y cronograma.png",
						alt: "...",
					}}
				>
					<Typography fontWeight={"bold"}>
						¡Crea tu perfil de usuario, y se generará un análisis de salud
						completamente automático y personalizado para ti!
					</Typography>
					<Typography>
						Las recomendaciones están basadas en estudios médicos certificados y
						avalados por especialistas. Con explicaciones simples y fáciles de
						entender, y también con las fuentes oficiales de la información.
					</Typography>
					<Typography>¡Rápido, fácil, y confiable!</Typography>
					<Typography fontWeight={"bold"}>
						Obtén un cronograma completo de chequeos médicos recomendados para
						ti, que se irá adaptando dinámicamente.
					</Typography>
				</Beneficio>

				<Beneficio
					image={{
						src: "agendar turnos medicos.png",
						alt: "...",
					}}
				>
					<Typography fontWeight={"bold"}>
						¡Agenda turnos medicos facilmente!
					</Typography>
					<Typography>
						Deja que tu &quot;asistente de salud&quot; te recomiende centros
						médicos y especialistas, en base a tu cronograma de chequeos médicos
						y a tu perfil, y también, la calificación y opiniones del
						especialista médico, dentro de la plataforma.
					</Typography>
					<Typography fontWeight={"bold"}>
						¡Elige el especialista de tu preferencia en base a su información,
						la fecha y la hora, y tu turno estara agendado!
					</Typography>
				</Beneficio>

				<Beneficio
					image={{
						src: "doctores.png",
						alt: "...",
					}}
				>
					<Typography fontWeight={"bold"}>
						¡La información de los especialistas médicos dentro de la plataforma
						está verificada!
					</Typography>
					<Typography>Y puedes verla en todo momento.</Typography>
					<Typography>
						También, puedes dejar tus opiniones, recomendaciones y calificación.
						¡Y ver las opiniones anónimas de otros pacientes!
					</Typography>
					<Typography>
						Si necesitas hacerles preguntas, puedes hacerlo fácilmente.
					</Typography>
					<Typography>
						Y puedes acceder a las conclusiones de la consulta médica realizada,
						y al récipe médico.
					</Typography>
				</Beneficio>

				<Beneficio
					image={{
						src: "historial medico.png",
						alt: "...",
					}}
				>
					<Typography fontWeight={"bold"}>
						¡Ten a tu disposición, en todo momento, todos los resultados de tus
						examenes medicos!
					</Typography>
					<Typography>
						Puedes compartirlo con tus especialistas médicos. Tu &quot;asistente
						de salud&quot; le alertará automáticamente de incompatibilidades
						entre medicamentos, o cualquier información que debería tener en
						consideración.
					</Typography>
					<Typography>
						Y ver, y analizar el progreso a lo largo del tiempo, de tus
						resultados médicos.
					</Typography>
				</Beneficio>

				<Beneficio
					image={{
						src: "ambulancia y huella dactilar.png",
						alt: "...",
					}}
				>
					<Typography fontWeight={"bold"}>
						¡Específica información, para el personal de salud, en caso de
						emergencia!
					</Typography>
					<Typography>
						Aun si te encuentras inconsciente, el personal de salud verificado
						dentro de la plataforma, puede escanear tu huella dactilar para
						acceder a información vital para atenderte correctamente.
					</Typography>
					<Typography fontWeight={"bold"}>
						Tipo de sangre, alergias, contactos de emergencia, afecciones
						previas, obra social.
					</Typography>
				</Beneficio>
			</Container>
		</Box>
	);
}

export default Beneficios;
