import React from 'react';
import { getComments } from '../utility/apiRequest';
import { getCookie } from '../utility/cookie';
import Layout from '../component/Layout';

export default class Comments extends React.Component {
  static async getInitialProps({ req }) {
    const token = getCookie('token', req.headers.cookie);
    console.log('page'+token);
    console.log('cookie'+req.headers.cookie);
    const commentInfoJson = await getComments.latest(token);
    const comments = await commentInfoJson.data;
    return {
      comments
    };
  }
  render() {
    // const comments = this.props.commentInfoJson.comments;
    return (
      <Layout fromType='comments'>
        comments
      </Layout>
    );
  }
}