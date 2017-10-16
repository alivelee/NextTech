import React from 'react';
import { getTopics } from '../utility/apiRequest';
import { getCookie } from '../utility/cookie';
import Layout from '../component/Layout';
import Topicitem from '../component/Topicitem'
export default class topics extends React.Component {
  static async getInitialProps({ req }) {
    const token = getCookie('token', req.headers.cookie);
    console.log('page'+token);
    console.log('cookie'+req.headers.cookie)
    const topicTrendingJson = await getTopics.trending(token).then(response => response.data);
    return {
      topicTrendingJson
    };
  }
  render() {
    const trendTopics = this.props.topicTrendingJson.topics;
    return (
      <Layout fromType='topics'>
        <h1>Trending Topics</h1>
        {
          trendTopics.map( item => <Topicitem topic={item} key={item.id}/>)
        }
      </Layout>
    );
  }
}