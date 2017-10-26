import React from 'react';
import styled from 'styled-components';
const Nav = styled.nav`
  top: 0px;
  left: 0px;
  bottom: 0px;
  position: sticky;
  padding: 10px;
  background-color: #1E1E1E;
  color: white;
  width: 90px;
  height: 100vh;
`;
const Ul = styled.ul`
  margin: 0;
  padding: 0;
`;
const Navlist = styled.li`
  display: block;
  list-style: none;
  height: 40px;
  line-height: 40px;
  margin: 20px 0;
`;
const Link = styled.a`
  display: inline-block;
  text-decoration: none;
  padding-left: 5px;
  color: ${props => props.active ? 'red' : 'white'};
`;
const NavBar = (props) => (
  <Nav>
    <Ul>
      <Navlist><Link href='/topics' active={props.fromType === 'topics'}>topics</Link></Navlist>
      <Navlist><Link href='/collections' active={props.fromType === 'collections'}>collections</Link></Navlist>
      <Navlist><Link href='/posts' active={props.fromType === 'posts'}>posts</Link></Navlist>
      <Navlist><Link href='/user' active={props.fromType === 'user'}>user</Link></Navlist>
      {/* <Navlist><Link href='/comments' active={props.fromType === 'comments'}>comments</Link></Navlist> */}
    </Ul>
  </Nav>
);

export default NavBar;