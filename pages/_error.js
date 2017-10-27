import React from 'react'
import { OAUTH_USER_URL,USER_API_KEY,REDIRECT_URL } from '../utility/api'
import { AnimatedButton } from '../styles/components/Button';
import { Wrapper,Info } from '../styles/components/Error';
export default class Error extends React.Component {
  static getInitialProps({ res, jsonPageRes }) {
    const statusCode = res
      ? res.statusCode
      : jsonPageRes ? jsonPageRes : null
    return { statusCode }
  }
  render() {
    const status = this.props.statusCode;
    console.log(status);
    if (status === '401') {
      return (
        <Wrapper>
          <h1>You Need to Login in to see your feed</h1>
          <Info>We Need To Authorized By Official Produnt Hunt API</Info>
          <Info>We Are Not Accessing your Personal Information</Info>
          <AnimatedButton 
            href="/login" 
            padding='0.8em'
            margin='20px'
            href={`${OAUTH_USER_URL}authorize?client_id=${USER_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code&scope=public+private`}
          >Login</AnimatedButton>  
        </Wrapper>
      );
    } else {
      return (
        <Wrapper>
          {/* {this.props.message
            ? `An error ${this.props.message} occurred on server`
            : 'An error occurred on client'} */}
            <h1>An Error Has Occurred</h1>
            <AnimatedButton 
              href="/login" 
              padding='0.8em'
              margin='20px'
              href='/'
            >Return to Home Page</AnimatedButton>  
        </Wrapper>
      )
    }
  }
}