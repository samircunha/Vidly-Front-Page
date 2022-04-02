import {useEffect, useState} from "react";
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import Typography from "@mui/material/Typography"

export function Body () {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(()=>{
        setTimeout(()=>{
            setTime(new Date().toLocaleTimeString());
        }, 1000)
    }, [time]);

    return (
        <>
        <ButtonGroup variant='outlined' color='primary' size="large">
        <Button> one</Button>
        <Button> two</Button>
        <Button> tree</Button>
        </ButtonGroup>
        <Typography>
            Este é o body!
            O horário agora é {time}
        </Typography>
        </>
    )
}