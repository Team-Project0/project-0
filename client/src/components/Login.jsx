import React from 'react'
import { deepPurple } from '@mui/material/colors';
import { GlobalStyles } from '@mui/styled-engine';
import { ImageList } from '@mui/material';
const color = deepPurple[400];
const Login = () => {
    return (
        <div>
             
            <GlobalStyles
                styles={{ body: { background: color } }}
               
            />
            <ImageList>
            <img src="https://www.milka.com/etc.clientlibs/mdlz-common/clientlibs/clientlib-milka-redesign/resources/static/images/milka-logo.png" 
            />
            </ImageList>
         
        </div>
    )
}

export default Login
