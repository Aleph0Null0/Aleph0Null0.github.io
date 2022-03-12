import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "@mui/material";
import { ThemeProvider } from '@emotion/react';
import theme from './theme.js';

export default function Homepage() {

    return (
        <>
        <ThemeProvider theme={theme}>
        <Container>
            A homepage...
            <header>
                HOME
            </header>
            <Button color="primary" variant="contained"><Link to="/projects" style={{textDecoration: 'none'}}>Projects</Link></Button>
        </Container>
        </ThemeProvider>
        </>
    )
};

//sx={{
//    width: 500,}}
//color="primary" variant="contained"
//182a4d