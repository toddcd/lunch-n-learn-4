import * as React from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import { Button, Menu, MenuItem, Toolbar, Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';

const linkStyle = { textDecoration: 'none', color: ' #424242' };

function App() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        return <Link to="/">Home</Link>;
    };

    return (
        <div className="App">
            <Box>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Button
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={handleClick}
                        >
                            Menu
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button'
                }}
            >
                <Link style={linkStyle} to="/pageone">
                    <MenuItem onClick={handleClose}>Page One</MenuItem>
                </Link>
                <Link style={linkStyle} to="/pagetwo">
                    <MenuItem onClick={handleClose}>Page Two</MenuItem>
                </Link>
            </Menu>

            <Switch>
                <Route exact path={'/'} component={PageOne} />
                <Route exact path={'/pageone'} component={PageOne} />
                <Route exact path={'/pagetwo'} component={PageTwo} />
            </Switch>
        </div>
    );
}

export default App;
