import React from 'react';
import axios from 'axios';
import { getCookie } from '../utility/cookie';

export default class Index extends React.Component {
  static async getInitialProps({ req }) {
    const token = getCookie('token', req.headers.cookie);
    console.log('page'+token);
    console.log('cookie'+req.headers.cookie)
    const postInfoJson = await axios({
      method: 'get',
      url: 'https://api.producthunt.com/v1/posts',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response => response.data);
    return {
      postInfoJson
    };
  }
  render() {
    return (
      <div {...this.props}>
        Dashboard
      </div>
    );
  }
}