import { Avatar, Container, Paper, Typography, Grid, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Input from './Input';
import useStyles from './styles'; 
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import GoogleIcon from '@mui/icons-material/Google';
import jwt_decode from 'jwt-decode'
import { useDispatch } from 'react-redux';
import storeAuthData from '../../actions/auth';

const Auth = () => {
  const classes = useStyles();
  const [isSignup, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch(); // Create a dispatch function

  const handleSubmit = () => {};

  const handleChange = () => {};

  const googleSuccess = async (res) => {
    // console.log(res);
    const result = jwt_decode(res?.credential);
    // console.log(result);
    const token = res?.credential;
    // console.log(token);

    try {
      // Dispatch the action to store authentication data and token in Redux state
      dispatch(storeAuthData(result, token));
    } catch (error) {
    }
  };

  const googleFailure = (error) => {
    console.log(error);
    console.log('Google Sign In was unsuccessful. Try Again Later');
  };

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
  const switchMode = () => {
    setIsSignUp((prevIsSignup) => !prevIsSignup);
    handleShowPassword(false);
  };

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar} style={{ backgroundColor: '#f50057' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus xs={6} />
                <Input name='lastName' label='Last Name' handleChange={handleChange} xs={6} />
              </>
            )}
            <Input name='email' label='Email Address' handleChange={handleChange} type='email' />
            <Input
              name='password'
              label='Password'
              handleChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' />}
          </Grid>
          <Button sx={{ marginBottom: '10px' }} type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>

          <GoogleOAuthProvider clientId='821857814657-qntb520u7l4ru0b959hbu0jeql0uu4ba.apps.googleusercontent.com'>
            <GoogleLogin onSuccess={googleSuccess} onFailure={googleFailure} />
          </GoogleOAuthProvider>

          <Grid container justify='flex-end'>
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
