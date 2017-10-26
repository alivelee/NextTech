import React from 'react';
import { formatDate } from '../utility/date';
import { CollectionImage } from '../styles/components/image';
import styled from 'styled-components';
import { CardShadow } from '../styles/theme';
import { TitleLink } from '../styles/components/Link';
import Icon from '../styles/components/Icon';
import { Image } from '../styles/components/image';
const Wrapper = styled.section`
  font-size: 14px;
  width: 100%;
  // min-width: 200px;
  // max-width: 300px;
  margin: 0px;
  position:relative;
  // min-height: 300px;
  display: flex;
  padding: 10px;
  vertical-align:middle;
  border: 1px solid black;
`;
const Info = styled.div`
  
`;
const PostNumber = styled.div`
  line-height: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: baseline;
`;
const Time = styled.span`
  text-align: right;
`;
const List = (props) => {
  let name = props.listContent.name;
  let link = props.listContent.collection_url;
  let createTime = props.listContent.created_at;
  let updateTime = props.listContent.updated_at;
  let postCount = props.listContent.posts_count;
  let backgroundImage = props.listContent.background_image_url;
  return (
    <Wrapper>
      {/* { backgroundImage && <CollectionImage src={backgroundImage} alt="image-for-collection"/>} */}
      <Info>
        <PostNumber><Icon size='18px' name='class' />{postCount} {postCount > 1 ? 'Posts': 'Post'}</PostNumber>
        <TitleLink href={link} >{name}</TitleLink>
        <Time><Icon name='event' size='18px' />{formatDate(createTime)}</Time>
        {/* <div>update at {formatDate(updateTime)}</div> */}
      </Info>
    </Wrapper>
  )
};

const PostList = (props) => {
  let { isFeatured,tagline,topics,user,votes_count } = props.listContent;
  let postName = props.listContent.name;
  let url = props.listContent.redirect_url
  let commentsNumber = props.listContent.comments_count;
  let createTime = props.listContent.created_at;
  return (
    <Wrapper>
      <Image src={user.image_url['30px']}></Image>
      <TitleLink href={url}>{postName}<div>{tagline}</div></TitleLink>
      <span>{votes_count}<Icon name='star' size='18px' /></span>
      <Time><Icon name='event' size='18px' />{formatDate(createTime)}</Time>
    </Wrapper>
  )
}
export {
  List,
  PostList
};