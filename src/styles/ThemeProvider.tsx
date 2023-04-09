import {
	createTheme,
	ThemeProvider as ThemeProviderMui,
} from "@mui/material/styles";
import theme from "./theme";

const ThemeProvider = ({ children }: any) => {
	const themeCreated = createTheme(theme);

	return <ThemeProviderMui theme={themeCreated}>{children}</ThemeProviderMui>;
};

export default ThemeProvider;
