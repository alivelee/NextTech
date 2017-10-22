import React from 'react';
import { getComments } from '../utility/apiRequest';
import { getCookie } from '../utility/cookie';
import Layout from '../component/Layout';

export default class Collections extends React.Component {
  static async getInitialProps({ req }) {
    const token = getCookie('token', req.headers.cookie);
    console.log('page'+token);
    console.log('cookie'+req.headers.cookie)
    const commentInfoJson = await getComments.latest(token).then(response => response.data);
    return {
      commentInfoJson
    };
  }
  render() {
    const post = this.props.commentInfoJson.comments;
    return (
      <Layout fromType='comments'>
        comments
      </Layout>
    );
  }
}