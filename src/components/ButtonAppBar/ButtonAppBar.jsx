import * as React from "react";
import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import BugReportIcon from "@mui/icons-material/BugReport";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../App";
import { Paper, Avatar } from "@mui/material";
import { deepOrange} from '@mui/material/colors';
import {SET_MAIN_USER} from "../../state/reducers"
import { useNavigate } from "react-router-dom";

const ButtonAppBar = () => {
    const { state, dispatch } = useContext(GlobalContext);
    const navigate = useNavigate();
    const profileExit = () => {
        const payload = {
            id: 0,
            name: "",
            email: "",
            photo: "",
            date: 0,
        }
        dispatch({type: SET_MAIN_USER, payload})
        navigate("/login");
    }
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

                    {state.mainUser.name ? (
                        <div style={{ display: "flex", alignItems: "center" }}>
                            {state.mainUser.name === "гость" ? (
                                <Avatar sx={{ bgcolor: deepOrange[500], marginRight: "1em" }}>
                                    Г
                                </Avatar>
                            ) : (
                                <Avatar
                                    alt={state.mainUser.name}
                                    src={state.mainUser.photo}
                                    style={{ marginRight: "1em" }}
                                ></Avatar>
                            )}
                         
                                <Button variant={"outlined"} color="inherit" onClick={profileExit}>
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
        </Box>
    );
};

export default ButtonAppBar;
