import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import BugReportIcon from '@mui/icons-material/BugReport';
import LocationCityIcon from '@mui/icons-material/LocationCity';

const ButtonAppBar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<LocationCityIcon />
					</IconButton>
					<Typography
						variant="h4"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						Selo Social Network
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default ButtonAppBar;
