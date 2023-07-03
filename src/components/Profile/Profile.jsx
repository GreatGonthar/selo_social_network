import React from "react";
import { Avatar, makeStyles, Paper, Typography, Grid } from "@mui/material";
import { useParams } from 'react-router-dom';
import useOneCharacter from '../../hooks/useOneCharacter'
import ProfileCard from "./ProfileCard"
import AboutUser from "./AboutUser"
import { LoremIpsum } from "lorem-ipsum";
import classes from "./Profile.module.css";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

  
  function Profile() {
  const params = useParams();
  const userId = params.userId;  
  const user = useOneCharacter(userId) 
  if(!user.name){
    return (
      <div>загрузка....</div>
    )
  }else {
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
                imgUrl={user.image}
                content={user.type}
                userName={user.name}
                id={user.id}
            />
        </Grid>
        <Grid item xs={10}>
        <AboutUser user={user}/>
        </Grid>
      </Grid>
      <Paper className={classes.newsContainer}>
      <Typography variant="body2" component="div" color="text.secondary">
          {lorem.generateWords(180)}
          </Typography>        
      </Paper>
    </>
  );}
      
}

export default Profile;
