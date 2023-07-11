import React, { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "./NavBar";
import Login from "./Login";
import { auth } from "../../firebaseConfig/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";




export default function UlbiTvChat() {
    const login = async () => {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log(user)
    };
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/login" element={<Login login={login}/>} />
            </Routes>
        </div>
    );
}
