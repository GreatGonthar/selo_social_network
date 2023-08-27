import React, { useContext, useEffect } from "react";
import { Button, Container, Grid, Box } from "@mui/material";
import { auth } from "../../firebaseConfig/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { SET_MAIN_USER } from "../../state/reducers";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../App";
import { db } from "../../firebaseConfig/firebaseConfig";
import { collection, addDoc, setDoc, doc, serverTimestamp } from "firebase/firestore";
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

        localStorage.mainUser =  JSON.stringify(mainUser)
        dispatch({ type: SET_MAIN_USER, payload: mainUser });

        let userIsBase = false;
        for (let i = 0; i < users.length; i++) {
            const obj = users[i];
            if (obj.id === mainUser.id) {
                userIsBase = true;
                break;
            }
        }
        if (!userIsBase) {
            const createUser = async (mainUser) => {
                await setDoc(doc(db, "users", `${mainUser.id}`), { ...mainUser }); 
            };
            createUser(mainUser);
        }
    };
    const guest = () => {
        dispatch({
            type: SET_MAIN_USER,
            payload: {
                name: "гость",
                photo: "https://upload.wikimedia.org/wikipedia/ru/thumb/7/78/Trollface.svg/1200px-Trollface.svg.png",
                id: 123,
                email: "нету",
                date: Date.now()
            },
        });
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
                    <Box p={5}>
                        <Button onClick={guest} variant={"outlined"}>
                            Войти как гость
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
