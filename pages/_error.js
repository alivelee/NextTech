import React from 'react'

export default class Error extends React.Component {
  static getInitialProps({ res, jsonPageRes }) {
    const statusCode = res
      ? res.statusCode
      : jsonPageRes ? jsonPageRes : null
    return { statusCode }
  }
  componentDidMount() {
    console.log('shows');
  }
  render() {
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