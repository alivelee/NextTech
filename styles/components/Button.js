import styled from 'styled-components';

const Button = styled.a.attrs({
  padding: props => props.padding || '1em',
  fontSize: props => props.size || '1rem'
})`
  display: inline-block;
  color: #37474f;
  border: 1px solid;
  border-radius: 5px;
  border-color: #37474f;
  padding: ${props => props.padding};
  font-size: ${props => props.fontSize};
  cursor: pointer;
`;

export {
  Button
}