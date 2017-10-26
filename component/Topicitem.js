import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { formatDate } from '../utility/date';
import { TopicImage } from '../styles/components/image';
const TopicInfoWrapper = styled.figcaption`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s;
`;
const TopicInfo = styled.div`
  transform: translate3d(0,200px,0);
  transition: transform 0.4s ease-in-out;
  text-align: center;
  padding: 0 2em;  
`;
const TopicLink = styled.a`
  z-index: 1000;
  text-indent: 200%;
  white-space: nowrap;
  font-size: 0;
  opacity: 0;
`;
const Name = styled.h3`
  transform: translate3d(0,20px,0);
  transition: transform 0.35s, color 0.4s;
  color: grey;
  font-weight: 100;
  align-self: center;
`;
const Time = styled.div`
  opacity:0;
  transition: opacity 0.4s;
  letter-spacing: 1px;
  span {
    color:white;
  }
`;
const Others = styled.div`
  opacity:0;
  transition: all 0.6s;
`;
const Description = styled.div`
  opacity:0;
  transition: all 0.6s;
`;
const TopicItem = (props) => {
  let { name, description } = props.topic;
  let createTime = props.topic.created_at;
  let follower = props.topic.followers_count
  let postCount = props.topic.posts_count;
  let updateTime = props.topic.updated_at;
  let backgroundImage = props.topic.image;
  const Topic = styled.figure`
    display:inline-block;
    position: relative;
    max-width: 390px;
    max-height: 390px;
    cursor: pointer;
    background: ${theme.topicHover};
    flex: 1 1 auto;
    margin: 20px 1%;
    overflow: hidden;
    span {
      opacity: 0;
    }
    &:hover h3 {
      transform: translate3d(0,0px,0);
    }
    &:hover img {
      transform: translate3d(0,0,0);
    }
    &:hover div ,
    &:hover span{
      opacity: 1;
      transform: translate3d(0,0,0);
    }
    &:hover figcaption {
      background-color:black;
      color: white;
    }
  `;
  return (
    <Topic>
      <TopicImage src={backgroundImage} alt="topic image"/>
      <TopicInfoWrapper>
        <Name>{name}</Name>
        <TopicInfo>
          <Description>{description}</Description>
          {/* <Others>{follower} followers</Others>
          <Others>{postCount} posts</Others> */}
          <Time>Updated at{formatDate(updateTime)}</Time>
        </TopicInfo>
        <TopicLink />
      </TopicInfoWrapper>
    </Topic>
  );
}

export default TopicItem;