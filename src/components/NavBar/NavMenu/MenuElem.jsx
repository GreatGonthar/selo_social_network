import * as React from "react";
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
import { Link } from "@mui/material";
import {useLocation} from 'react-router-dom'

const MenuElem = ({ icon, text}) => {
let route =	useLocation().pathname.split("/").slice(1)

	return (
		<ListItem disablePadding >
			<Link color='#000000' underline='none'>
			<ListItemButton>
				{icon && <ListItemIcon>{icon}</ListItemIcon>}
				<ListItemText primary={text} />
			</ListItemButton>
			</Link>
		</ListItem>
	);
};

export default MenuElem;
