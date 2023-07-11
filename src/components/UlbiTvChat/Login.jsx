import React, { useContext } from "react";
import { Button, Container, Grid, Box } from "@mui/material";

const Login = ({login}) => {
    return (
        <Container>
            <Grid container alignItems={"center"} justify={"center"}>
                <Grid container alignItems={"center"} direction={"column"} style={{background: 'lightgray'}}>
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
