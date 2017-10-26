import styled from 'styled-components';

const IconFont = styled.i.attrs({
  fontSize: props => props.size || '18px',
  width: props => props.width || '20px',
  top: props => props.top || '-2px',
  left: props => props.left || '0px',
  right: props => props.right || '0px',
  bottom: props => props.bottom || '0px'
})`
  font-size:${props => props.fontSize};
  display: inline-block;
  text-align: right; 
  margin-right: 5px;
  vertical-align: middle;
  position: relative;
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
`;

const Icon = (props) => {
  return (
    <IconFont 
      className='material-icons' 
      size={props.size} 
      width={props.width}
      top={props.top}
      left={props.left}
      right={props.right}
      bottom={props.bottom}  
    >{props.name}</IconFont>
  )
}
export default Icon;

