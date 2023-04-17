import React, { useState } from "react";
import { TextField, Button, Grid, Paper, styled, Container } from "@material-ui/core";
import { Box } from '@mui/material';
import { setOpenAlert } from '../Reducers/CommonReducer';
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom"

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault()

        setEmailError(false)
        setPasswordError(false)

        if (email == '') {
            setEmailError(true)
        }
        if (password == '') {
            setPasswordError(true)
        }
        if (email && password) {
            let password1 = localStorage.getItem('Password');
            let email1 = localStorage.getItem('Email');
            if (password1 == password &&
                email1 == email) {
                dispatch(setOpenAlert({
                    alertInfo: "Login Success",
                    alertSeverity: 'success',
                }))
                setPassword('');
                setEmail('');
            }
            else {
                dispatch(setOpenAlert({
                    alertInfo: "Login Error",
                    alertSeverity: 'error',
                }))
            }
        }
    }
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Box
                    sx={{
                        marginX: '65%',
                        width: '30%',
                        backgroundColor: '#cdf2fa',
                        borderRadius: '2%'

                    }}
                >
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <h2 style={{ paddingLeft: '40%' }}>Login</h2>
                        <Container spacing={2} direction="row" sx={{ marginBottom: 4 }}>

                            <TextField
                                label="Email"
                                onChange={e => setEmail(e.target.value)}
                                required
                                variant="outlined"
                                color="secondary"
                                type="email"
                                sx={{ mb: 1 }}
                                fullWidth
                                value={email}
                                error={emailError}
                                style={{ width: '95%', marginLeft: 10 }}
                            />
                            <TextField
                                label="Password"
                                onChange={e => setPassword(e.target.value)}
                                required
                                variant="outlined"
                                color="secondary"
                                type="password"
                                value={password}
                                error={passwordError}
                                fullWidth
                                sx={{ mb: 3 }}
                                style={{ width: '95%', margin: ' 10px 10px 10px 10px' }}

                            />
                            <Button variant="outlined" color="secondary" type="submit" style={{ marginLeft: 10 }}>Login</Button>
                        </Container>

                    </form>
                    <small style={{ margin: '10px 0px 30px 20px' }}>Need an account? <Link to="/register">Register</Link></small>
                </Box>
            </Box>
        </>
    );
}

export default LoginForm;