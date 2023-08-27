import "./App.css";
import React, { Component, useState, useReducer } from "react";
import ButtonAppBar from "./components/ButtonAppBar/ButtonAppBar";
import NavMenu from "./components/NavBar/NavMenu/NavMenu";
import RoutesComponent from "./RoutesComponent/RoutesComponent"
import { HashRouter, BrowserRouter, Route, Routes } from "react-router-dom";
import { Container, Box, Grid } from "@mui/material";
import {initialState, reducer} from "./state/reducers"

import useUsers from "./hooks/useUsers";
import { ReportGmailerrorred } from "@mui/icons-material";

export const GlobalContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <HashRouter>
      <GlobalContext.Provider value={{state, dispatch}}>
      <Box component="div" sx={{ overflow: 'hidden' }}>
          <ButtonAppBar />
          <Grid
            container
            sx={{
              width: "100%",
              // height: "100vh",
            }}
          >
            <Grid item xs={0} sm={2}>
              <NavMenu xs="none" sm="block"/>
            </Grid>
            <Grid item xs={12} sm={10}>
            <RoutesComponent/>
            </Grid>
          </Grid>
        </Box>
      </GlobalContext.Provider>
    </HashRouter>
  );
}
// SeloChatAdmin
// 8dFRu6LSKswVxk5T
// F9gGIH7lLSAorcCQ@gmail.com

export default App;
