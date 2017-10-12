import React from 'react';
import getCollections from '../utility/apiRequest';
import { getCookie } from '../utility/cookie';
import Layout from '../component/Layout';

export default class Collections extends React.Component {
  static async getInitialProps({ req }) {
    const token = getCookie('token', req.headers.cookie);
    console.log('page'+token);
    console.log('cookie'+req.headers.cookie)
    const postInfoJson = await getCollections.default(token).then(response => response.data);
    return {
      postInfoJson
    };
  }
  render() {
    const post = this.props.postInfoJson.posts;
    return (
      <Layout fromType='topics'>
        topics
      </Layout>
    );
  }
}