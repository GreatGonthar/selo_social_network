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
    const { id, name, email, date } = user;
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
                    }}
                >
                    <Typography variant="body2" color="text.secondary">
                        {`ID: `}
                        <Typography
                            variant="h6"
                            color="text.primary"
                            component="span"
                        >
                            {id}
                        </Typography>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {`Name: `}
                        <Typography
                            variant="h6"
                            color="text.primary"
                            component="span"
                        >
                            {name}
                        </Typography>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {`email: `}
                        <Typography
                            variant="h6"
                            color="text.primary"
                            component="span"
                        >
                            {email}
                        </Typography>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {`date: `}
                        <Typography
                            variant="h6"
                            color="text.primary"
                            component="span"
                        >
                            {date}
                        </Typography>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {`type: `}
                        <Typography
                            variant="h6"
                            color="text.primary"
                            component="span"
                        >
                            {"пусто"}
                        </Typography>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {`location: `}
                        <Typography
                            variant="h6"
                            color="text.primary"
                            component="span"
                        >
                            {"пусто"}
                        </Typography>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {`species: `}
                        <Typography
                            variant="h6"
                            color="text.primary"
                            component="span"
                        >
                            {"пусто"}
                        </Typography>
                    </Typography>
                </Paper>
            </Box>
        </>
    );
};
export default AboutUser;
