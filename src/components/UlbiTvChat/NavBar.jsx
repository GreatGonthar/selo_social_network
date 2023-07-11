import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import BugReportIcon from "@mui/icons-material/BugReport";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    const user = false;
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar variant={"dense"}>
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
                            настройки
                        </Typography>
                        {user ? (
                            <Button variant={"outlined"} color="inherit">
                                выход
                            </Button>
                        ) : (
                            <NavLink to={'/ulbitvchat/login'}>
                                <Button variant={"outlined"} color="inherit">Логин</Button>
                            </NavLink>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default NavBar;
