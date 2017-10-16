import React from 'react';
import { formatDate } from '../utility/date';
import { Image } from '../styles/components/image';

export default (props) => {
  let name = props.collections.name;
  let link = props.collections.collection_url;
  let createTime = props.collections.created_at;
  let updateTime = props.collections.updated_at;
  let postCount = props.collections.posts_count;
  let backgroundImage = props.collections.background_image_url;
  return (
    <div>
      <a>{name}</a>
      <a href={link}>View it on Main site</a>
      <span>create at {formatDate(createTime)}</span>
      <span>update at {formatDate(updateTime)}</span>
      <span> {postCount} {postCount > 1 ? 'posts': 'post'}</span>
      <div>
        img: { backgroundImage && <Image src={backgroundImage} alt="background-image-for-collection"/>}
      </div>
    </div>
  )
}