import React from 'react';
import { Slide, Typography } from '@mui/material';

const style = {
    display: 'flex',
    height: '100%',
    color: '#FFFFFF',
    backgroundColor: '#a0d6b4',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
};

const PageOne = () => {
    return (
        <div style={style}>
            <div>
                <Slide direction="down" timeout={1000} in={true} mountOnEnter unmountOnExit>
                    <Typography variant="h1">Lunch-n-Learn</Typography>
                </Slide>
            </div>
            <div>
                <Slide direction="up" timeout={1000} in={true} mountOnEnter unmountOnExit>
                    <Typography variant="h3">Page One</Typography>
                </Slide>
            </div>
        </div>
    );
};

export default PageOne;
