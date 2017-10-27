import styled from 'styled-components';

const MainContent = styled.section.attrs({
  backgroundcolor: props => props.backgroundcolor || 'white',
  padding: props => props.padding || '0.9rem 0.6rem 0rem 0.9rem'
})`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  padding: ${props => props.padding};
  background-color: ${props => props.backgroundColor};
`;

export {
  MainContent
}