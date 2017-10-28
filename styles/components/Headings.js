import styled from 'styled-components';
const Heading = styled.div.attrs({
  fontSize: props => props.fontSize || '0.2rem',
})`
  font-size: ${props => props.fontSize};
`;

export {
  Heading
}