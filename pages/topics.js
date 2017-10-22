import React from 'react';
import Error from 'next/error';
import { getTopics } from '../utility/apiRequest';
import { getCookie } from '../utility/cookie';
import Layout from '../component/Layout';
import Topicitem from '../component/Topicitem'
export default class topics extends React.Component {
  static async getInitialProps({ req }) {
    const token = getCookie('token', req.headers.cookie);
    console.log('page'+token);
    console.log('cookie'+req.headers.cookie)
    const topicTrendingJson = await getTopics.trending(token);
    const topicTrendData = topicTrendingJson.data;
    console.log(topicTrendingJson.status);
    return {
      topicTrendData
    };
  }
  state = {
    title: 'Trending'
  }
  render() {
    const trendTopics = this.props.topicTrendData.topics;
    return (
      <Layout fromType='topics' title={this.state.title}>
        {
          trendTopics.map( item => <Topicitem topic={item} key={item.id}/>)
        }
      </Layout>
    );
  }
}