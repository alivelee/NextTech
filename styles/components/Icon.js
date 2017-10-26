import styled from 'styled-components';

const IconFont = styled.i.attrs({
  fontSize: props => props.size || '18px',
  width: props => props.width || '20px'
})`
  font-size:${props => props.fontSize};
  display: inline-block;
  text-align: right;
  margin-right: 5px;
  vertical-align: middle;
`;

const Icon = (props) => {
  return (
    <IconFont className='material-icons' size={props.size} width={props.width}>{props.name}</IconFont>
  )
}
export default Icon;

