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
import {useLocation} from 'react-router-dom'

const NavMenu = () => {
		const [route, setRoute] = useState(useLocation().pathname.split("/").slice(1))
	

	return (
		<Box sx={{ width: "100%" }}>
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
					<NavLink
						to="/news"
						className={styles.default}
						activeClassName={styles.active}
					>
						<MenuElem icon={<NewspaperIcon />} text="News" />
					</NavLink>					
				</List>
			</nav>
			<Divider />

			<nav aria-label="secondary mailbox folders">
				<List>
					<MenuElem text="trash" />
					<MenuElem text="span" />
				</List>
			</nav>
		</Box>
	);
};

export default NavMenu;

// import React, { Component }  from 'react';
// import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
// import classes from "./Nav.module.css"

// const Nav = () => {
//     return <nav className={classes.nav}>
//         <NavLink to="/profile" className={classes.default} activeClassName={classes.active}>Profile</NavLink>
//         <NavLink to="/messages" className={classes.default} activeClassName={classes.active}>Messages</NavLink>
//         <NavLink to="/Users" className={classes.default} activeClassName={classes.active}>Users</NavLink>
//         <NavLink to="/NewYear" className={classes.default} activeClassName={classes.active}>NewYear 2023</NavLink>
//         <NavLink to="/weather" className={classes.default} activeClassName={classes.active}>Weather</NavLink>
//         <NavLink to="/Close" className={classes.default} activeClassName={classes.active}>Close</NavLink>

//     </nav>
// }

// export default Nav;
