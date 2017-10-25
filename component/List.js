import React from 'react';
import { formatDate } from '../utility/date';
import { CollectionImage } from '../styles/components/image';
import styled from 'styled-components';
import { CardShadow } from '../styles/theme';
import { TitleLink } from '../styles/components/Link';
import Icon from '../styles/components/Icon';
const Collection = styled.section`
  font-size: 14px;
  width: 100%;
  // min-width: 200px;
  // max-width: 300px;
  margin: 0px;
  position:relative;
  // min-height: 300px;
  display: flex;
  padding: 10px 0;
  vertical-align:middle;
  border: 1px solid black;
`;
const CollectionInfo = styled.div`
  
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
  let name = props.collections.name;
  let link = props.collections.collection_url;
  let createTime = props.collections.created_at;
  let updateTime = props.collections.updated_at;
  let postCount = props.collections.posts_count;
  let backgroundImage = props.collections.background_image_url;
  return (
    <Collection>
      {/* { backgroundImage && <CollectionImage src={backgroundImage} alt="image-for-collection"/>} */}
      <CollectionInfo>
        <PostNumber><Icon size='18px' name='class' />{postCount} {postCount > 1 ? 'Posts': 'Post'}</PostNumber>
        <TitleLink href={link} >{name}</TitleLink>
        <Time><Icon name='event' size='18px' />{formatDate(createTime)}</Time>
        {/* <div>update at {formatDate(updateTime)}</div> */}
      </CollectionInfo>
    </Collection>
  )
};

export default List;