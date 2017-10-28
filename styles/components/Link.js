import styled from 'styled-components';
import { LinkStyle } from '../theme';
const Link = styled.a.attrs({

})`
	text-decoration: none;
	color: ${LinkStyle.color};
`;
const TitleLink = Link.extend`
	display: inline-block;
	margin: 0 10px;
	// width: 400px;
	text-align: center;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export {
	Link,
	TitleLink
}