import styled from 'styled-components';
import { LinkStyle } from '../theme';
const Link = styled.a.attrs({

})`
	text-decoration: none;
	color: ${LinkStyle.color};
`;
const TitleLink = Link.extend.attrs({
	margin: props => props.margin || '0 10px',
	fontSize: props => props.fontSize || '0.25rem'
})`
	display: inline-block;
	margin: ${props => props.margin};
	// width: 400px;
	text-align: ${props => props.center ? 'center' : 'left'};
	text-overflow: ellipsis;
	white-space: nowrap;
	font-size: ${props => props.fontSize};
`;

export {
	Link,
	TitleLink
}