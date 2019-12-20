import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import UserMenu from './UserMenu';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';

class Header extends Component {

  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            Home
          </IconButton>
          <Typography variant="h6" style={{flexGrow: 1}}>
            News
          </Typography>
          {this.props.currentUser === null ? <></> : <UserMenu { ...this.props.currentUser }/>}
          <Typography variant="body1">
            <span onClick={this.props.logoutUser}>{this.props.currentUser === null ? 'Login' : 'Logout'}</span>
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.authentication.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
