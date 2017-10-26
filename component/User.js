import React from 'react'
import styled from 'styled-components';
import { UserImage } from '../styles/components/image';
import { CardShadow } from '../styles/theme';
const Card = styled.div`
  width: 500px;
  box-shadow: ${CardShadow.basic};
  display: flex;
  flex-direction: column;
  font-size: 16px;
  margin-top: 100px;
`;
const Info = styled.div`
  width: 100%;
  padding: 1em;
`;
const UserComponent = (props) => {
  let { user } = props.user;
  let username = user.name;

  console.log(user);
  return (
    <Card>
      <UserImage src={user.image_url['80px']}/>
      <Info>
        <div>Name: {user.name}</div>
        <div>Email: {user.email}</div>
        <div>headline: {user.headline}</div>
        <div>Followed Topic {user.followed_topics_count}</div>
        <div>Followers {user.followers_count}</div>
        <div>Following {user.followings_count}</div>
      </Info>
    </Card>
  );
}

export {
  UserComponent
}