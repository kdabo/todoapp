import React, { Component } from 'react';

import Auth from '../containers/Auth';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Navigation extends Component {
  render() {
    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Todo List
            </Typography>
            <Auth/>
          </Toolbar>
        </AppBar>
      </>
    )
  }
}

export default Navigation;
