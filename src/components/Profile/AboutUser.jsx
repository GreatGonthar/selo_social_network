import React from "react";
import {
  Avatar,
  makeStyles,
  Paper,
  Typography,
  Grid,
  Box,
} from "@mui/material";

const AboutUser = ({ user }) => {
  const { id, gender, name, status, type, location, species } = user;
  return (
    <>
      <Box
        sx={{
          marginLeft: 2,
        }}
      >
                <Paper
                sx={{
                  padding: 2,
                }}>
         <Typography variant="body2" color="text.secondary">
        {`ID: `}
          <Typography variant="h6" color="text.primary" component="span">
            {id}
          </Typography>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Name: `}
          <Typography variant="h6" color="text.primary" component="span">
            {name}
          </Typography>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {`gender: `}
          <Typography variant="h6" color="text.primary" component="span">
            {gender}
          </Typography>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {`status: `}
          <Typography variant="h6" color="text.primary" component="span">
            {status}
          </Typography>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {`type: `}
          <Typography variant="h6" color="text.primary" component="span">
            {type}
          </Typography>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {`location: `}
          <Typography variant="h6" color="text.primary" component="span">
            {location.name}
          </Typography>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {`species: `}
          <Typography variant="h6" color="text.primary" component="span">
            {species}
          </Typography>
        </Typography>




        </Paper>
      </Box>
    </>
  );
};
export default AboutUser;
