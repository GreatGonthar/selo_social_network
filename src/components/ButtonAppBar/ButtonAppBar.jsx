import * as React from "react";
import { useContext, useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import BugReportIcon from "@mui/icons-material/BugReport";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../App";
import {
    Paper,
    Avatar,
    Grid,
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
} from "@mui/material";

import { deepOrange } from "@mui/material/colors";
import { SET_MAIN_USER } from "../../state/reducers";
import { SET_USERS } from "../../state/reducers";
import { useNavigate } from "react-router-dom";
import NavMenu from "../NavBar/NavMenu/NavMenu";

const ButtonAppBar = () => {
    const { state, dispatch } = useContext(GlobalContext);
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        //changes the function state according to the value of open sx={{ flexGrow: 1 }}
        console.log(open);
        setOpen(!open);
    };
    const navigate = useNavigate();
    const profileExit = () => {
        const hollowMainUser = {
            id: null,
            name: "",
            email: "",
            photo: "",
            date: 0,
        };
        localStorage.clear();
        dispatch({ type: SET_MAIN_USER, payload: hollowMainUser });
        dispatch({ type: SET_USERS, payload: [] });
        navigate("/login");
    };

    return (
        <Box sx={{ display: "flex" }}>
            <AppBar
                position="relative"
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, mt: 1 }}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer()}
                        sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
                    >
                        {open ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>

                    <Typography
                        variant="h4"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Selo Social Network
                    </Typography>

                    {state.mainUser.name ? (
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <NavLink
                                to="/profile"
                                style={{ textDecoration: "none" }}
                            >
                                {state.mainUser.name === "гость" ? (
                                    <Avatar
                                        sx={{
                                            bgcolor: deepOrange[500],
                                            marginRight: "1em",
                                        }}
                                    >
                                        Г
                                    </Avatar>
                                ) : (
                                    <Avatar
                                        alt={state.mainUser.name}
                                        src={state.mainUser.photo}
                                        style={{ marginRight: "1em" }}
                                    ></Avatar>
                                )}
                            </NavLink>
                            <Button
                                variant={"outlined"}
                                color="inherit"
                                onClick={profileExit}
                            >
                                выход
                            </Button>
                        </div>
                    ) : (
                        <NavLink to={"/login"}>
                            <Button variant={"outlined"} color="inherit">
                                Login
                            </Button>
                        </NavLink>
                    )}
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="left" //from which side the drawer slides in
                variant="temporary" //if and how easily the drawer can be closed
                open={open} //if open is true, drawer is shown
                onClose={toggleDrawer()} //function that is called when the drawer should close
                onOpen={toggleDrawer()} //function that is called when the drawer should open
            >
                <Box>
                    <NavMenu xs="auto" sm="none" setOpen={setOpen} />
                </Box>
            </Drawer>
        </Box>
    );
};

export default ButtonAppBar;
