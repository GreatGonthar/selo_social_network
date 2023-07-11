import React from "react";
import Profile from "../components/Profile/Profile"
import DialogBox from "../components/DialogBox/DialogBox"
import UsersBox from "../components/UsersBox/UsersBox"
import Firebase from "../components/Firebase/Firebase"
import UlbiTvChat from "../components/UlbiTvChat/UlbiTvChat"
import Login from "../components/Login/Login"
import { HashRouter, BrowserRouter, Route, Routes } from "react-router-dom";

function RoutesComponent() {
	 
		return (
				<>
						<Routes>
								<Route exact path="/" element={<div>main menu</div>} />
								<Route
										exact
										path="/profile/"
										element={<Profile />}
								/>
								<Route path="/profile/:userId?" element={<Profile />} />
								<Route path="/dialogs" element={<DialogBox />} />
								<Route exact path="/users/" element={<UsersBox/>} />
								<Route path="/users/:usersPage?" element={<UsersBox/>} />
								<Route path="/news" element={<div>news</div>} />
								<Route path="/firebase" element={<Firebase />} />
								<Route path="/ulbitvchat/*" element={<UlbiTvChat />} />
								<Route path="/login" element={<Login/>} />
						</Routes>
				</>
		);
}

export default RoutesComponent;
