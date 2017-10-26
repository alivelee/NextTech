import React from 'react';
import { getCollections } from '../utility/apiRequest';
import { getCookie } from '../utility/cookie';
import Layout from '../component/Layout';
import { List } from '../component/List';

export default class Collections extends React.Component {
  static async getInitialProps({ req }) {
    const token = getCookie('token', req.headers.cookie);
    console.log('page'+token);
    console.log('cookie'+req.headers.cookie);
    const collectionsJson = await getCollections.default(token).then(response => response.data);
    const featuredCollectionsJson = await getCollections.featured(token).then(response => response.data);
    return {
      collectionsJson,
      featuredCollectionsJson
    };
  }
  render() {
    const collections = this.props.collectionsJson.collections;
    const featuredCollections = this.props.featuredCollectionsJson.collections;
    return (
      <Layout fromType='collections'>
        {featuredCollections.map(item => <List listContent={item} key={item.id}/> )}
      </Layout>
    );
  }
}