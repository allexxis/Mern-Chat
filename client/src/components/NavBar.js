import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar,Typography} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline';
import {createMuiTheme,MuiThemeProvider} from '@material-ui/core'


const NavBar=(props)=>{
    const classes = props

    return (
        <AppBar position="static" style={classes.bar}>
                <Toolbar style={classes.bar} >
                    <Typography variant='title' color='inherit'>
                        MERN Realtime Chat
                    </Typography>
                </Toolbar>
            </AppBar>
    
    )
}

const styles = theme => ({
    bar:{
        backgroundColor:'#CECE'
    }
})    
NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(NavBar);