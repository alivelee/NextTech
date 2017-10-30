import styled from 'styled-components';
import { CardShadow } from '../theme';
const MainContent = styled.section.attrs({
  backgroundcolor: props => props.backgroundcolor || 'white',
  padding: props => props.padding || '0rem'
})`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  padding: ${props => props.padding};
  background-color: ${props => props.backgroundColor};
  margin-left: auto;
  margin-right: auto;
  // border-top: 1px solid #F1F1F1;
`;

export {
  MainContent
}