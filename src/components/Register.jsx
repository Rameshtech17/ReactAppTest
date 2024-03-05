
import React, { useState } from "react";
import { TextField, Container } from "@material-ui/core";
import { Box } from '@mui/material';
import { setOpenAlert } from '../Reducers/CommonReducer';
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import Button from '@mui/material/Button';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('2023-04-16');

    function handleSubmit(event) {
        event.preventDefault();
        localStorage.setItem('Email', email);
        localStorage.setItem('Password', password);
        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
        setDateOfBirth('')
        dispatch(setOpenAlert({
            alertInfo: "Register Success",
            alertSeverity: 'success',
        }
        ))
        window.location.pathname = "/login";

    }

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
                    <form onSubmit={handleSubmit} action={<Link to="/login" />}>
                        <h2 style={{ paddingLeft: '40%' }}>Register</h2>
                        <Container spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                            <TextField
                                type="text"
                                variant='outlined'
                                color='secondary'
                                label="First Name"
                                onChange={e => setFirstName(e.target.value)}
                                value={firstName}
                                fullWidth
                                required
                                style={{ width: '95%', marginLeft: 10 }}

                            />
                            <TextField
                                type="text"
                                variant='outlined'
                                color='secondary'
                                label="Last Name"
                                onChange={e => setLastName(e.target.value)}
                                value={lastName}
                                fullWidth
                                required
                                style={{ width: '95%', marginLeft: 10, marginTop: 10 }}

                            />
                            <TextField
                                type="email"
                                variant='outlined'
                                color='secondary'
                                label="Email"
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                                fullWidth
                                required
                                sx={{ mb: 4 }}
                                style={{ width: '95%', marginLeft: 10, marginTop: 10 }}

                            />
                            <TextField
                                type="password"
                                variant='outlined'
                                color='secondary'
                                label="Password"
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                                required
                                fullWidth
                                sx={{ mb: 4 }}
                                style={{ width: '95%', marginLeft: 10, marginTop: 10 }}

                            />
                            <TextField
                                type="date"
                                variant='outlined'
                                color='secondary'
                                label="Date of Birth"
                                onChange={e => setDateOfBirth(e.target.value)}
                                value={dateOfBirth}
                                fullWidth
                                required
                                sx={{ mb: 4 }}
                                style={{ width: '95%', marginLeft: 10, marginTop: 10 }}

                            />
                            <Button variant="outlined" color="secondary" type="submit" style={{ marginLeft: 10, marginTop: 10 }}
                            >Register</Button>
                        </Container>

                    </form>
                    <small style={{ margin: '10px 0px 30px 20px' }}>Already have an account? <Link to="/login">Login</Link></small>

                </Box>

            </Box>
        </>
    );
}

export default RegisterForm;