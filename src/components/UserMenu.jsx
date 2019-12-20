import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

class UserMenu extends Component {

  render() {
    return(
      <Button color="inherit">
        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/2.jpg" />
        <Typography variant="body1">
          {this.props.email}
        </Typography>
      </Button>
    )
  }
}

export default UserMenu;
