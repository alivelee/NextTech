import React from 'react';
import { formatDate } from '../utility/date';
import { CollectionImage } from '../styles/components/image';
import styled from 'styled-components';
import { CardShadow } from '../styles/theme';
import { Link } from '../styles/components/Link';
const Collection = styled.section`
  box-shadow: ${CardShadow.medium};
  min-width: 500px;
  max-width: 600px;
  margin: 20px 5%;
  position:relative;
  min-height: 300px;
  display: flex;
  flex-direction: column;
`;
const CollectionInfo = styled.div`
  
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
      { backgroundImage && <CollectionImage src={backgroundImage} alt="image-for-collection"/>}
      <CollectionInfo>
        <Link href={link}>{name}</Link>
        <div>create at {formatDate(createTime)}</div>
        <div>update at {formatDate(updateTime)}</div>
        <span> {postCount} {postCount > 1 ? 'posts': 'post'}</span>
      </CollectionInfo>
    </Collection>
  )
};

export default List;