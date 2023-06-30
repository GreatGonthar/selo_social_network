import "./App.css";
import React, { Component } from "react";
import ButtonAppBar from "./components/ButtonAppBar/ButtonAppBar";
import NavMenu from "./components/NavBar/NavMenu/NavMenu";
import { Container, Box, Grid } from "@mui/material";
import DialogBox from "./components/DialogBox/DialogBox";
import { HashRouter, BrowserRouter, Route, Routes } from "react-router-dom";

const Users = () => {
	return <div>users</div>;
};
function App() {
	return (
		<BrowserRouter>
			<div>
				<ButtonAppBar />
				<Grid
					container
					sx={{
						width: "100%",
						height: "100vh",
					}}
				>
					<Grid item xs={2}>
						<NavMenu />
					</Grid>
					<Grid item xs={10}>
						<Routes>
							<Route exact path="/" element={<div>main menu</div>} />
							<Route path="/profile" element={<div>profile</div>} />
							<Route path="/dialogs" element={<DialogBox />} />
							<Route path="/users" element={<div>users</div>} />
							<Route path="/news" element={<div>news</div>} />
						</Routes>
					</Grid>
				</Grid>
			</div>
		</BrowserRouter>
	);
}

export default App;
