import "./App.css";
import React, { Component, useState } from "react";
import ButtonAppBar from "./components/ButtonAppBar/ButtonAppBar";
import NavMenu from "./components/NavBar/NavMenu/NavMenu";
import { Container, Box, Grid } from "@mui/material";
import DialogBox from "./components/DialogBox/DialogBox";
import UsersBox from "./components/UsersBox/UsersBox";
import { HashRouter, BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import useUsers from "./hooks/useUsers";

export const GlobalContext = React.createContext();

function App() {
  const state = useUsers(7);
  return (
    <BrowserRouter>
      <GlobalContext.Provider value={state}>
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
                <Route path="/profile/:userId?" element={<Profile />} />
                <Route path="/dialogs" element={<DialogBox />} />
                <Route path="/users" element={<UsersBox />} />
                <Route path="/news" element={<div>news</div>} />
              </Routes>
            </Grid>
          </Grid>
        </div>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
