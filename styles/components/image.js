import styled from 'styled-components';
const Image = styled.img`
  max-width: 100%;
`;
const TopicImage = Image.extend`
  max-width: none;
  object-fit: cover;
  width: calc(100% + 40px);
  height: 356px;
  opacity: 0.7;
  transform: translate3d(-40px,0,0);
  transition: transform 0.4s;
`;
export {
  Image,
  TopicImage
}