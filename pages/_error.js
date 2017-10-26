import React from 'react'
import { OAUTH_USER_URL,USER_API_KEY,REDIRECT_URL } from '../utility/api'
import { Button } from '../styles/components/Button';

export default class Error extends React.Component {
  static getInitialProps({ res, jsonPageRes }) {
    const statusCode = res
      ? res.statusCode
      : jsonPageRes ? jsonPageRes : null
    return { statusCode }
  }
  render() {
    const status = this.props.statusCode;
    console.log(status)
    if (status === '401') {
      return (
        <div>
          <article>You Need to Login in to see your feed</article>
          <Button href="/login">Login</Button>  
        </div>
      );
    } else {
      return (
        <p>
          {/* {this.props.message
            ? `An error ${this.props.message} occurred on server`
            : 'An error occurred on client'} */}
            error
        </p>
      )
    }
  }
}