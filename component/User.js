import React from 'react'
import styled from 'styled-components';
import { UserImage } from '../styles/components/image';
import { CardShadow } from '../styles/theme';
import Icon from '../styles/components/Icon';
const Card = styled.div`
  width: 500px;
  box-shadow: ${CardShadow.basic};
  display: flex;
  flex-direction: column;
  font-size: 16px;
  margin: 100px auto;
`;
const Info = styled.div`
  width: 100%;
  padding: 2em;
  font-size: 1rem;
  line-height: 1.5;
  div {
    margin: 10px 0;
  }
`;
const Tag = styled.span`
  height: 32px;
  line-height: 32px;
  padding: 0 12px;
  border: 0;
  border-radius: 16px;
  background-color: #dedede;
  display: inline-block;
  color: rgba(0,0,0,.87);
  margin: 2px 0;
  white-space: nowrap;
`;
const UserComponent = (props) => {
  let { user } = props.user;
  let username = user.name;
  return (
    <Card>
      <UserImage src={user.image_url['80px']}/>
      <Info>
        <div><Icon name='account_circle' />Name: <Tag>{user.name}</Tag></div>
        <div><Icon name='contact_mail' />Email: <Tag>{user.email}</Tag></div>
        <div><Icon name='business' />Headline: <Tag>{user.headline}</Tag></div>
        <div>Followed Topic: <Tag>{user.followed_topics_count}</Tag></div>
        <div><Icon name='person' size='18px' />Followers <Tag>{user.followers_count}</Tag></div>
        <div><Icon name='person' size='18px' />Following <Tag>{user.followings_count}</Tag></div>
      </Info>
    </Card>
  );
}

export {
  UserComponent
}