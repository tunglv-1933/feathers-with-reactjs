import React, { Component } from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  Button
} from '@material-ui/core';
import { loginUser, actionSaveCurrentUser } from '../actions';
import { connect } from 'react-redux';
import Error from './Error';

class LoginForm extends Component {

  handleSubmit(e) {
    e.preventDefault();
    this.props.loginUser(e.target.email.value, e.target.password.value);
  }

  render() {

    if (localStorage.getItem('jwt') !== null) {
      return <></>
    }

    return (
      <div className='wrapper-login-form' style={{ display: 'flex', justifyContent: 'center', margin: 20, padding: 20 }}>
        <form onSubmit={e => this.handleSubmit(e)} style={{ width: '50%' }}>
          <h1>Login Form</h1>
          <Error {...this.props.error} />
          <FormControl margin='normal' fullWidth>
            <InputLabel htmlFor='email'>Email</InputLabel>
            <Input id='email' type='text' />
          </FormControl>

          <FormControl margin='normal' fullWidth>
            <InputLabel htmlFor='password'>Password</InputLabel>
            <Input id='password' type='password' />
          </FormControl>

          <Button type='submit' variant='contained' color='primary' size='large'>Login</Button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  error: state.authentication.error
})

const mapDispatchToProps = dispatch => ({
  loginUser: (email, password) => dispatch (loginUser(email, password)),
  dispatchCurrentUser: (res) => dispatch(actionSaveCurrentUser(res.accessToken, res.user))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
