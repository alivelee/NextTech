import React from 'react'

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
          You Need to Login in to see your feed
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