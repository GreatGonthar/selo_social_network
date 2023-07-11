import React, { useContext, useEffect } from "react";
import { Button, Container, Grid, Box } from "@mui/material";
import { auth } from "../../firebaseConfig/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { SET_MAIN_USER } from "../../state/reducers";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../App";
import { db } from "../../firebaseConfig/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import useUsers from "../../hooks/useUsers";

const Login = () => {
    const usersCollectionRef = collection(db, "users");
    const { state, dispatch } = useContext(GlobalContext);
    
    let users = useUsers();
    const navigate = useNavigate();

    const login = async () => {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);

        const mainUser = {
            id: result.user.uid,
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL,
            date: result.user.metadata.lastSignInTime,
        };

        dispatch({ type: SET_MAIN_USER, payload: mainUser });

       
        let userIsBase = false;
        for (let i = 0; i < users.length; i++) {
            const obj = users[i];
            if (obj.name === mainUser.name) {
                userIsBase = true;
                break;
            }
        }
        if (!userIsBase) {
            const createUser = async (mainUser) => {
                await addDoc(usersCollectionRef, {
                    ...mainUser,
                });
            };
            createUser(mainUser);
        }
    };
    useEffect(() => {
        if (state.mainUser.name) {
            navigate("/profile");
           
        }       
    }, [state.mainUser.name]);

    return (
        <Container>
            <Grid container alignItems={"center"} justify={"center"}>
                <Grid
                    container
                    alignItems={"center"}
                    direction={"column"}
                    style={{ background: "lightgray" }}
                >
                    <Box p={5}>
                        <Button onClick={login} variant={"outlined"}>
                            Войти с помощью Google
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;