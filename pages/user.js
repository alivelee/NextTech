import React from 'react';
import { getCookie } from '../utility/cookie';

import { getUser } from '../utility/apiRequest'
import Layout from '../component/Layout';
import { UserComponent } from '../component/User'; 
class User extends React.Component {
  static async getInitialProps({req}) {
    let currentUser,error;
    const token = getCookie('token', req.headers.cookie);
    try {
      const userResponse = await getUser.myself(token);
      currentUser = userResponse.data
      console.log(userResponse);
    } catch (err) {
      error = JSON.stringify(err.response);
      console.log(error);
    }
    return {
      currentUser,
      error
    }
  }
  render() {
    return (
      <Layout fromType='user'>
        <UserComponent user={this.props.currentUser}/>
      </Layout>
    )
  }
}

export default User;