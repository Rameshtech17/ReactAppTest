import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from 'react-router-dom';
import List from '../components/pageList';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import LoginForm from '../components/Login';
import AlertPopup from '../components/Common/Alert'
import RegisterForm from '../components/Register';
import AppLogout from "../components/Common/AppLogOut"
import Header from "../components/Header"
const NotFound = ({ path }) => {

    return (
        <Container>
            <Box m={3}>
                <Typography variant='h2'>404 - Not Found</Typography>
            </Box>
            <Box m={3}>
                <Typography variant='h5'>
                    <b>{path}</b>
                    <span> is not registered route. </span>
                </Typography>
            </Box>
            <Box m={3}>

                <Link to='/list'> Go Home</Link>
            </Box>
        </Container>
    )
}

function AppRouting() {
    return (
        <>
            <AlertPopup />
            <AppLogout/>
            <Header/>
            <Router>
                <Routes>
                    <Route path={'/list'} element={<List />} />
                    <Route path={'/login'} element={<LoginForm />} />
                    <Route path={'/register'} element={<RegisterForm />} />

                    <Route path="*" element={<NotFound path="*" />} />
                </Routes>
            </Router>
        </>
    )
}

export default AppRouting;