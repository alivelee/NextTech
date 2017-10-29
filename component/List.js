import React from 'react';
import { formatDate, fromNow } from '../utility/date';
import { CollectionImage } from '../styles/components/image';
import styled from 'styled-components';
import { CardShadow } from '../styles/theme';
import { TitleLink } from '../styles/components/Link';
import Icon from '../styles/components/Icon';
import { Image, UserImage } from '../styles/components/image';
const Wrapper = styled.section.attrs({
  paddingleft: props => props.paddingleft || '0.3rem'
})`
  font-size: 0.2rem;
  width: 100%;
  // min-width: 200px;
  // max-width: 300px;
  margin: 0.2rem;
  position:relative;
  // min-height: 300px;
  padding-left: ${props => props.paddingleft};
  vertical-align:middle;
  box-shadow: ${CardShadow.spread};
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: flex-start;
    a {
      text-align: left;
      margin-left: 0px;
    }
    div {
      margin: 0.2rem 0;
    }
  }
`;
const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0.1rem;
`;
const PostNumber = styled.div`
  line-height: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: baseline;
`;
const Time = styled.div.attrs({
  textalign: props => props.textalign || 'right'
})`
  text-align: ${props => props.textalign};
  .people {
    margin-left: 0.4rem;
  }
`;
const Description = styled.div`
  font-size: 0.2rem;
  color: #3A454F;
`;
const PostWrapper = Wrapper.extend`
  display: flex;
  align-items: center;
`;
const PostTime = Time.extend`
  margin: 0.1rem 0;
`;
const PostDescription = Description.extend`
  margin: 0.1rem 0;
`;
const List = (props) => {
  let { name, subscriber_count,title } = props.listContent;
  let link = props.listContent.collection_url;
  let createTime = props.listContent.created_at;
  let updateTime = props.listContent.updated_at;
  let postCount = props.listContent.posts_count;
  let backgroundImage = props.listContent.background_image_url;
  return (
    <Wrapper>
      {/* { backgroundImage && <CollectionImage src={backgroundImage} alt="image-for-collection"/>} */}
      <Info>
        <PostNumber><Icon size='24px' name='class' />{postCount} {postCount > 1 ? 'Posts': 'Post'}</PostNumber>
        <TitleLink href={link} >{name}</TitleLink>
        <Description>{title}</Description>
        <Time className='time'><Icon name='event' size='24px' />{fromNow(createTime)} ago <span><span className='people'>{subscriber_count} People Followed</span></span></Time>
        {/* <div>update at {formatDate(updateTime)}</div> */}
      </Info>
    </Wrapper>
  )
};

const PostList = (props) => {
  let { isFeatured,tagline,topics,user,votes_count} = props.listContent;
  let postName = props.listContent.name;
  let url = props.listContent.redirect_url
  let commentsNumber = props.listContent.comments_count;
  let createTime = props.listContent.created_at; 
  return (
    <PostWrapper paddingleft='0'>
      <Image src={user.image_url['100px']} width='80px' height='80px' margin='0.2rem' round></Image>
      <PostInfo>
        <TitleLink href={url} margin='0px'>{postName}</TitleLink>
        <PostDescription>{tagline}</PostDescription>
        <PostTime textalign='left'><span className='star'><Icon name='star' size='18px' margin='0 4px 0 0'/>{votes_count}</span><Icon name='query_builder' size='18px' margin='0 0.0625rem 0 0.15rem'/>{fromNow(createTime)} ago</PostTime>
      </PostInfo>
    </PostWrapper>
  )
}
export {
  List,
  PostList
};