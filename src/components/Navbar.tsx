import { AppBar, Button, Toolbar, Typography } from "@mui/material";

// TODO: Corregir la interface para usar la del boton correcto
/* interface ButtonNavbarProps extends ButtonTypeMap {
	children: JSX.Element | string;
} */

interface ButtonNavbarProps {
	children: JSX.Element | string;
	[x: string]: any;
}

const ButtonNavbar = ({ children, ...props }: ButtonNavbarProps) => (
	<Button sx={{ fontSize: "1.5rem" }} color="inherit" {...props}>
		{children}
	</Button>
);

function Navbar() {
	return (
		<AppBar
			component={"nav"}
			elevation={0}
			position="absolute"
			sx={{ padding: "20px 30px" }}
		>
			<Toolbar component={"div"} variant="dense" sx={{ gap: "20px" }}>
				<Typography
					variant="h1"
					color="inherit"
					component="div"
					sx={{ flexGrow: 1 }}
				>
					Asistente de salud
				</Typography>

				<ButtonNavbar>Beneficios</ButtonNavbar>
				<ButtonNavbar variant="outlined">
					{/* Newsletter */} Contactos
				</ButtonNavbar>
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
