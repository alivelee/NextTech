import styled from 'styled-components';

const MainContent = styled.section.attrs({
  backgroundColor: props => props.backgroundcolor || 'white'
})`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px;
  background-color: ${props => props.backgroundColor};
`;

export {
  MainContent
}