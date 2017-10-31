import React from 'react';
import styled from 'styled-components';
const Nav = styled.nav`
  display: block;
  position: fixed;
  width: 100vw;
  top: 0;
  font-size: 0.4rem;
  padding: 0.2rem 0 0.3rem 0.2rem;
  background: #eee;
  height: 1.3rem;
  z-index: 1;
`;
const Ul = styled.ul`
  margin: 0;
  padding: 0;
`;
const Navlist = styled.li`
  display: inline;
  list-style: none;
  height: 40px;
  line-height: 40px;
  margin: 20px;
  &:first-child {
    margin-left: 0;
  }
`;
const Link = styled.a`
  text-decoration: none;
  padding-left: 5px;
  color: ${props => props.active ? 'red' : 'black'};
`;
const NavBar = (props) => (
  <Nav>
    <Ul>
      <Navlist><Link href='/topics' active={props.fromType === 'topics'}>Topics</Link></Navlist>
      <Navlist><Link href='/collections' active={props.fromType === 'collections'}>Collections</Link></Navlist>
      <Navlist><Link href='/posts' active={props.fromType === 'posts'}>Posts</Link></Navlist>
      <Navlist><Link href='/user' active={props.fromType === 'user'}>User</Link></Navlist>
      {/* <Navlist><Link href='/comments' active={props.fromType === 'comments'}>comments</Link></Navlist> */}
    </Ul>
  </Nav>
);

export default NavBar;