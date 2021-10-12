import React from 'react';
import { Typography, Slide } from '@mui/material';

const style = {
    display: 'flex',
    height: '100%',
    color: '#FFFFFF',
    backgroundColor: '#5f9ea0',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
};

const PageTwo = () => {
    return (
        <div style={style}>
            <div>
                <Slide direction="down" timeout={1000} in={true} mountOnEnter unmountOnExit>
                    <Typography variant="h1">Lunch-n-Learn</Typography>
                </Slide>
            </div>
            <div>
                <Slide direction="up" timeout={1000} in={true} mountOnEnter unmountOnExit>
                    <Typography variant="h3">Page Two</Typography>
                </Slide>
            </div>
        </div>
    );
};

export default PageTwo;
