import React from "react";
import  {useNavigate} from 'react-router-dom';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";


export function FirstPage () {
    const stylesFirstPage = {
        textAlign: 'center',
    }
    const stylesButtons = {
        color: 'white',

    }
    const navigate = useNavigate();

    function onSubmit(data) {
        navigate(`/${data}`);
    }
    return (
        <Box sx={stylesFirstPage}>
            <Button sx={stylesButtons} size='large' onClick={()=>{onSubmit('LogIn')}}>
                Log In
            </Button>
            <Button sx={stylesButtons} size='large' onClick={()=>{onSubmit('Register')}}>
                Register
            </Button>
        </Box>
    )
}
