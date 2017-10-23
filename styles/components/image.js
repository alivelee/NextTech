import styled from 'styled-components';
import { CardShadow } from '../theme';
const Image = styled.img`
  max-width: 100%;
  object-fit: cover;
`;
const TopicImage = Image.extend`
  max-width: none;
  width: calc(100% + 40px);
  height: 356px;
  opacity: 0.3;
  transform: translate3d(-40px,0,0);
  transition: transform 0.4s;
`;
const CollectionImage = Image.extend`
  width: 500px;
  height: 200px;
`;
export {
  Image,
  TopicImage,
  CollectionImage
}