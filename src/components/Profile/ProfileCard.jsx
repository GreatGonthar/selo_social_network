import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

export default function ProfileCard({
  content = "somebody text",
  userName = "user",
  imgUrl = "https://source.unsplash.com/random",
  id = "0",
}) {
  return (
    <Box>
      <Card>
        <CardMedia component="img" image={imgUrl}></CardMedia>
        {/* <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {userName.charAt(0).toUpperCase() + userName.slice(1)}
            </Typography>
            <Typography variant="body2" component="div" color="text.secondary">
              {content}
            </Typography>
          </CardContent> */}
        <CardActions>
          <Button size="small">ok</Button>
          <Button size="small">cancel</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
