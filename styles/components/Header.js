import React from 'react';
import styled from 'styled-components';

const MainHeader = styled.header`
  background-color:red;
  top: -1px;
  position: sticky;
  z-index: 1;
  padding:2em;
`;

const Title = styled.h1`

`;
const Header = (props) => (
  <MainHeader>
    <span>{props.title}</span>
  </MainHeader>
);

export default Header;