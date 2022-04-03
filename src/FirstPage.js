import React from "react";
import { MainContainer } from "./components/MainContainer";
import  {useNavigate} from 'react-router-dom';
import Button from "@mui/material/Button";


export function FirstPage () {
    const navigate = useNavigate();

    function onSubmit(data) {
        navigate('/Logging');
    }
    return (
        <MainContainer>
            <Button variant='outlined' onClick={onSubmit}>
                Log In
            </Button>
            <Button variant='outlined'>
                Register
            </Button>
        </MainContainer>
    )
}
