import React from 'react';
import Error from 'next/error'

import { getPosts } from '../utility/apiRequest';
import { getCookie } from '../utility/cookie';
import Layout from '../component/Layout';

export default class Posts extends React.Component {
  static async getInitialProps({ req }) {
    let errorStatus,postInfoJson,error,postData;
    const token = getCookie('token', req.headers.cookie);
    console.log(typeof test);
    console.log('page'+token);
    console.log('cookie'+req.headers.cookie);
    try {
      const postInfoJson = await getPosts.todayPosts(token);
      postData = await postInfoJson.data;
      console.log(postData);      
    } catch (err) {
      error = JSON.stringify(err.response.status);
      console.log(typeof err.response);
    }
    console.log('awaited');
    return {
      error,
      postData
    };
  }
  render() {
    // const post = this.props.postData.posts;
    const { error } = this.props;
    return (
      <Layout fromType='posts' error={error}>
       <h1>Posts</h1>
      </Layout>
    );
  }
}