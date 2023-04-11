import { Box } from "@mui/material";

type Props = {
	children: JSX.Element;
};

function Container({ children }: Props) {
	return <Box sx={{ padding: "50px" }}>{children}</Box>;
}

export default Container;
