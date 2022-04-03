import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';

import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setActive] = useState(false);

    function activator() {
        setActive(!isActive);
    }

    function reset() {
        setSeconds(0);
        setActive(false);
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <Paper
            sx={{
                p: 3,
                m: 5,
                margin: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
            <Stack spacing={1}>
                <Typography gutterBottom variant="h3" align="center" component="div">
                    {seconds}s
                </Typography>
                <Stack direction="row" alignItems="center" justifyContent="center" spacing={3}>
                    <Button variant="contained" size="large" onClick={activator}>{isActive ? 'Pause' : 'Start'}</Button>
                    <Button variant="outlined" size="large" onClick={reset}>Reset</Button>
                </Stack>
            </Stack>
        </Paper>
    );
};

export default Timer;