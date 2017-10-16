import React from 'react';
import styled from 'styled-components';

const Topiclink = styled.a`
  display:inline-block;
  background-image:url(${props => `${props.backgroundImage}`});
`;

const TopicItem = (props) => {
  let name = props.topic.name;
  let slug = props.topic.slug;
  let createTime = props.topic.created_at;
  let description = props.topic.description;
  let follower = props.topic.followers_count
  let postCount = props.topic.posts_count;
  let updateTime = props.topic.updated_at;
  let backgroundImage = props.topic.image;
  return (
    <Topiclink>
      <span>{name}</span>
      <span>{createTime}</span>
      <span>{updateTime}</span>
      <span>{follower}</span>
      <span>{postCount}</span>
    </Topiclink>
  );
}

export default TopicItem;