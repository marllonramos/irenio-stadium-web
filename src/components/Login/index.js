import React from 'react';
import Copyright from '../Copyright';
import LockOutlinedIcon from '@material-ui/icons/SportsSoccer';
import { Container, Typography, CssBaseline, TextField, Avatar, Box, Button } from "@material-ui/core";
import './index.css';

const Login = () => {
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className="login-paper">
                <Avatar className="login-avatar">
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sistema Irênio Stadium
                </Typography>
                <form className="login-form" noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    {/* <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    /> */}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="login-submit">
                        Entrar
                    </Button>
                    {/* <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid> */}
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
};

export default Login;
