import React from "react";
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

export default function OneUserBox({
  content = "somebody text",
  userName = "user",
  imgUrl = "https://source.unsplash.com/random",
  id = "0",
}) {
  return (
    <Box className={styles.box}>
      <Link to={`/profile/${id}`} className={styles.a}>
        <Card>
          <CardMedia
            component="img"
            height={175}
            image={imgUrl}
            style={{ objectFit: "contain" }}
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {userName.charAt(0).toUpperCase() + userName.slice(1)}
            </Typography>
            <Typography variant="body2" component="div" color="text.secondary">
              {content}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">ok</Button>
            <Button size="small">cancel</Button>
          </CardActions>
        </Card>
      </Link>
    </Box>
  );
}
