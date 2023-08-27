import * as React from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MessageIcon from "@mui/icons-material/Message";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import MenuElem from "./MenuElem";
import { blue } from "@mui/material/colors";
import styles from "./NavMenu.module.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";

// const MyBox = styled('div')(({ theme }) => ({
//     // padding: theme.spacing(1),
//     [theme.breakpoints.down('sm')]: {
//       marginTop: "100px",
//       paddingLeft: "20px",
//       paddingRight: "50px"
//     }
//   }));

const NavMenu = ({ xs = "none", sm = "block", setOpen = () => false }) => {
    const [route, setRoute] = useState(
        useLocation().pathname.split("/").slice(1)
    );

    return (
        <Box
            sx={{
                width: "100%",
                px: { sm: 0, xs: "0px" },
                mt: { sm: 0, xs: "130px" },
                display: { xs: xs, sm: sm },
            }}
            onClick={() => setOpen(false)}
        >
            <nav aria-label="main mailbox folders">
                <List>
                    <NavLink
                        to="/profile"
                        className={styles.default}
                        activeClassName={styles.active}
                    >
                        <MenuElem icon={<AccountCircleIcon />} text="Profile" />
                    </NavLink>
                    <NavLink
                        to="/chat"
                        className={styles.default}
                        activeClassName={styles.active}
                    >
                        <MenuElem icon={<MessageIcon />} text="Chat" />
                    </NavLink>
                    <NavLink
                        to="/dialogs"
                        className={styles.default}
                        activeClassName={styles.active}
                    >
                        <MenuElem icon={<MessageIcon />} text="Dialogs" />
                    </NavLink>
                    <NavLink
                        to="/users"
                        className={styles.default}
                        activeClassName={styles.active}
                    >
                        <MenuElem icon={<PeopleAltIcon />} text="Users" />
                    </NavLink>
                    {/* <NavLink
                        to="/news"
                        className={styles.default}
                        activeClassName={styles.active}
                    >
                        <MenuElem icon={<NewspaperIcon />} text="News" />
                    </NavLink>
                    <NavLink
                        to="/firebase"
                        className={styles.default}
                        activeClassName={styles.active}
                    >
                        <MenuElem icon={<NewspaperIcon />} text="Firebase" />
                    </NavLink>
                    <NavLink
                        to="/UlbiTvChat"
                        className={styles.default}
                        activeClassName={styles.active}
                    >
                        <MenuElem icon={<NewspaperIcon />} text="UlbiTvChat" />
                    </NavLink> */}
                </List>
            </nav>
            <Divider />

            <nav aria-label="secondary mailbox folders">
                <List>
                    {/* <MenuElem text="trash" />
                    <MenuElem text="span" /> */}
                </List>
            </nav>
        </Box>
    );
};

export default NavMenu;

