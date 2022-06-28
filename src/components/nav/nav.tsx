
import React from 'react';
import {Box} from '@mui/material';
import Logo from './../tasty-logo.png'
export default function NavBar () {
    return<Box mb={5} width="100vw" height={55} style={{background: '#ebc919'}}>
        <img width={170} src={Logo} alt="logo" />
    </Box>
}