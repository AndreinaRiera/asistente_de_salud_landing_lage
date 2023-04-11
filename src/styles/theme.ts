import { CSSInterpolation, Components, ThemeOptions } from "@mui/material";

type Sizes = "small" | "medium" | undefined;
type Palettes = "primary" | "secondary";

const themePalette = {
	primary: {
		light: "#E0EBED",
		main: "#BED0D4",
		dark: "#6b9199",
		contrastText: "#ffffff",
	},
	secondary: {
		light: "#CFFDE1",
		main: "#68B984",
		dark: "#3D5656",
		contrastText: "#000",
	},
	cancel: {
		light: "#C6323B",
		main: "#C6323B",
		dark: "#C6323B",
		contrastText: "#ffffff",
	},
};

interface ComponentesTheme extends Components<Omit<Theme, "components">> {
	MuiLoadingButton: any;
}

interface Theme extends ThemeOptions {
	components: ComponentesTheme;
}

//https://mui.com/material-ui/customization/default-theme/
const theme: Theme = {
	palette: themePalette,
	spacing: [0, 25, 42, 55, 70, 85],
	typography: {
		fontFamily: `Inter, sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
		"Segoe UI Emoji", "Segoe UI Symbol"`,
		h1: {
			fontSize: "3rem",
			fontWeight: "bold",
		},
		h2: {
			fontSize: "2.5rem",
			fontFamily: `'Roboto', sans-serif`,
		},
		h3: {
			fontSize: "1.1rem",
		},
		h4: {
			fontSize: "1rem",
		},
		h5: {
			fontSize: "0.9rem",
		},
		body1: {
			fontSize: "1.6rem",
			fontFamily: `'Roboto', sans-serif`,
		},
		allVariants: {
			color: "#252525",
		},
	},
	components: {
		MuiContainer: {
			defaultProps: {
				maxWidth: "xl",
			},
		},
		MuiTypography: {
			defaultProps: {
				//https://mui.com/material-ui/react-typography/
				variantMapping: {
					h1: "h1",
					h2: "h2",
					h3: "h3",
					h4: "h4",
					h5: "h5",
					h6: "h6",
					subtitle1: "span",
					subtitle2: "span",
					body1: "p",
					body2: "p",
				},
			},
			styleOverrides: {
				root: ({ ownerState }: any): CSSInterpolation => ({
					...(ownerState.variant === "caption"
						? {
								color: "rgba(114, 114, 114, 0.8)",
						  }
						: {}),
				}),
			},
		},
		MuiTextField: {
			defaultProps: {
				fullWidth: true,
				size: "small",
				autoComplete: "off",
			},
			styleOverrides: {
				root: ({ ownerState }: any): CSSInterpolation => ({
					...(ownerState.variant === "outlined" && ownerState.disabled
						? {
								backgroundColor: "#f7f7f7",
						  }
						: {}),
				}),
			},
		},
		MuiMenu: {
			defaultProps: {
				keepMounted: true,
			},
		},
		//https://mui.com/material-ui/customization/theme-components/
		//https://mui.com/material-ui/api/button/
		MuiButton: {
			styleOverrides: {
				root: ({ ownerState }: any): CSSInterpolation => ({
					...(ownerState.variant === "text" && {
						textTransform: "none",

						...(ownerState.size === "small" && {
							paddingTop: "3px",
						}),
					}),
				}),
			},
		},

		//https://mui.com/material-ui/api/loading-button/
		MuiLoadingButton: {
			defaultProps: {
				loadingPosition: "start",
			},
			styleOverrides: {
				root: ({ ownerState }: any): CSSInterpolation => {
					const colorPalette: Palettes = ownerState.color || "primary";

					return {
						...((ownerState.disabled || ownerState.loading) && {
							opacity: 0.7,

							...(ownerState.variant === "contained" && {
								color: themePalette[colorPalette].contrastText + " !important",
								backgroundColor:
									themePalette[colorPalette].main + " !important",
							}),
						}),
					};
				},
			},
		},
	},
};

export default theme;
