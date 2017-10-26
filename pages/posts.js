import React from 'react';
import Error from 'next/error'

import { getPosts } from '../utility/apiRequest';
import { getCookie } from '../utility/cookie';
import Layout from '../component/Layout';
import { PostList } from '../component/List';

export default class Posts extends React.Component {
  static async getInitialProps({ req }) {
    let errorStatus,postInfoJson,error,postData;
    const token = getCookie('token', req.headers.cookie);
    console.log('page'+token);
    console.log('cookie'+req.headers.cookie);
    try {
      const postInfoJson = await getPosts.todayPosts(token);
      postData = await postInfoJson.data;
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
    const { error,postData } = this.props;
    return (
      <Layout fromType='posts' error={error}>
        {!error && postData.posts.map( item => <PostList listContent={item} key={item.id}></PostList>)}
      </Layout>
    );
  }
}