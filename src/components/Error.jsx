import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

class Error extends Component {

  render() {
    if(this.props !== undefined) {
      return (
        <div className='wrapper-error'>
          <Typography variant='body1' className={this.props.className}>
            {this.props.message}
          </Typography>
        </div>
      )
    }

    return <></>;
  }
}

export default Error;
