import styled from 'styled-components';

const Button = styled.a.attrs({
  padding: props => props.padding || '1em',
  margin: props => props.margin || '0px',
  fontSize: props => props.size || '1rem'
})`
  display: inline-block;
  color: #37474f;
  border: 3px solid;
  border-radius: 4px;
  border-color: #37474f;
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  font-size: ${props => props.fontSize};
  cursor: pointer;
  text-decoration: none;
`;

const AnimatedButton = Button.extend`
  transition: all 0.3s;
  &:hover {
    color: white;
    background-color: #37474f;
  }
`;
export {
  Button,
  AnimatedButton
}