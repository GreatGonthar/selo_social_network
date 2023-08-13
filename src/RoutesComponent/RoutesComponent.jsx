import React, { useContext, useEffect } from "react";
import Profile from "../components/Profile/Profile";
import DialogBox from "../components/DialogBox/DialogBox";
import ChatBox from "../components/DialogBox/ChatBox";
import UsersBox from "../components/UsersBox/UsersBox";
import Firebase from "../components/Firebase/Firebase";
import UlbiTvChat from "../components/UlbiTvChat/UlbiTvChat";
import Login from "../components/Login/Login";
import { HashRouter, BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalContext } from "../App";
import { useLocation, useNavigate } from "react-router-dom";

function RoutesComponent() {
    const accessibleRoutes = ["/news", "/users"];
    const { state, dispatch } = useContext(GlobalContext);
    const navigate = useNavigate();

    const location = useLocation();
    useEffect(() => {
        if (
            !state.mainUser.name &&
            !accessibleRoutes.includes(location.pathname)
        ) {
            navigate("/login");          
        }       
    }, [state.mainUser.name, navigate]);

    return (
        <>
            <Routes>
                <Route exact path="/" element={<div>main menu</div>} />
                <Route exact path="/profile/" element={<Profile />} />
                <Route path="/profile/:userId?" element={<Profile />} />
                <Route path="/chat" element={<ChatBox />} />
                <Route exact path="/dialogs" element={<UsersBox />} />
                <Route
                    path="/dialogs/:userId?"
                    element={<DialogBox />}
                />
                <Route exact path="/users/" element={<UsersBox />} />
                <Route path="/users/:usersPage?" element={<UsersBox />} />
                <Route path="/news" element={<div>news</div>} />
                {/* <Route path="/firebase" element={<Firebase />} /> */}
                {/* <Route path="/ulbitvchat/*" element={<UlbiTvChat />} /> */}
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
}

export default RoutesComponent;
