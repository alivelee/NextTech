import React from 'react';
import { OAUTH_USER_URL,USER_API_KEY,REDIRECT_URL } from '../utility/api'
import { Button } from '../styles/components/Button';
class Login extends React.Component {
  
  render() {
    return (
      <Button href={`${OAUTH_USER_URL}authorize?client_id=${USER_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code&scope=public+private`}>Login In</Button>
    )
  }
}

export default Login;