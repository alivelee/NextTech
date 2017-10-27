import styled from 'styled-components';
import { CardShadow } from '../theme';
const Image = styled.img`
  max-width: 100%;
  object-fit: cover;
`;
const TopicImage = Image.extend`
  max-width: none;
  width: calc(100% + 60px);
  min-height: 100%;
  opacity: 0.3;
  transform: translate3d(-40px,0,0);
  transition: transform 0.4s;
`;
const CollectionImage = Image.extend`
  width: 500px;
  height: 200px;
`;
const UserImage = Image.extend`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display:block;
  margin: 10px auto;
`;
export {
  Image,
  TopicImage,
  CollectionImage,
  UserImage
}