import React from 'react';
import { getPosts } from '../utility/apiRequest';
import { getCookie } from '../utility/cookie';
import Layout from '../component/Layout';

export default class Collections extends React.Component {
  static async getInitialProps({ req }) {
    const token = getCookie('token', req.headers.cookie);
    console.log('page'+token);
    console.log('cookie'+req.headers.cookie)
    const postInfoJson = await getPosts.todayPosts(token);
    const postData = postInfoJson.response;
    return {
      postData
    };
  }
  render() {
    const post = this.props.postData.posts;
    return (
      <Layout fromType='posts'>
       <h1>Posts</h1>
      </Layout>
    );
  }
}