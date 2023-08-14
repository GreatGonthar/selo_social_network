import React, { useEffect, useContext } from "react";
import {
    Paper,
    Box,
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    CardMedia,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import styles from "./UsersBox.module.css";
import { GlobalContext } from "../../App";

export default function OneUserBox({
    content = "somebody text",
    userName = "user",
    imgUrl = "https://source.unsplash.com/random",
    id = "0",
}) {
    const { state, dispatch } = useContext(GlobalContext);
    return (
        <Box className={styles.box}>
            <Card>
                <Link to={`/profile/${id}`} className={styles.a}>
                    <CardMedia
                        component="img"
                        height={175}
                        image={imgUrl}
                        style={{ objectFit: "contain" }}
                    ></CardMedia>
                </Link>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {userName.charAt(0).toUpperCase() + userName.slice(1)}
                    </Typography>
                    <Typography
                        variant="body2"
                        component="div"
                        color="text.secondary"
                    >
                        {content}
                    </Typography>
                </CardContent>
                <CardActions>
                    {state.mainUser.name === "гость" ? (
                        <Link to={`/chat`} className={styles.a}>
                            <Button size="small">только общий чат</Button>
                        </Link>
                    ) : state.mainUser.name ? (
                        <Link to={`/dialogs/${id}`} className={styles.a}>
                            <Button size="small">Написать</Button>
                        </Link>
                    ) : (   <Button size="small">X</Button>         
                    )}

                    <Button size="small">cancel</Button>
                </CardActions>
            </Card>
        </Box>
    );
}
