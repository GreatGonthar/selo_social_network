import React, { useContext, useEffect } from "react";
import { Avatar, makeStyles, Paper, Typography, Grid } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import AboutUser from "./AboutUser";
import { LoremIpsum } from "lorem-ipsum";
import classes from "./Profile.module.css";
import { GlobalContext } from "../../App";

function Profile() {
    const navigate = useNavigate();
    const { state, dispatch } = useContext(GlobalContext);
    const params = useParams();
    const userId = params.userId;

    let user = state.mainUser;
    for (let i = 0; i < state.users.length; i++) {
        const obj = state.users[i];
        if (obj.id === userId) {
            user = obj;
            break;
        }
    }

    return (
        <>
            <Grid
                container
                sx={{
                    marginTop: 2,
                    width: "100%",
                    height: "40%",
                }}
            >
                <Grid item xs={2}>
                    {/* <Avatar className={classes.avatar} src="/path/to/profile-image.jpg" /> */}
                    <ProfileCard
                        imgUrl={user.photo}
                        content={user.email}
                        userName={user.name}
                        id={user.id}
                    />
                </Grid>
                <Grid item xs={10}>
                    <AboutUser user={user} />
                </Grid>
            </Grid>
            <Paper className={classes.newsContainer}>
                <Typography
                    variant="body2"
                    component="div"
                    color="text.secondary"
                >
                    {"lorem.generateWords(180)"}
                </Typography>
            </Paper>
        </>
    );
}

export default Profile;
