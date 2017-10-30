import React from 'react';
import styled, { keyframes } from 'styled-components';
import { CardShadow } from '../theme';
const Card = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 1.3rem;
  margin: 0 0.05rem 0.05rem 0;
  box-shadow: ${CardShadow.basic};
  background: #F9F9F9;
  z-index: 1;
`;
const NavLink = styled.a`
  text-decoration: none;
  font-size: 0.5rem;
  color: ${props => props.active ? 'red' : 'black'};
`;
class NavTrigger extends React.Component {
  constructor(props){
    super(props);
    this.status = false
    this.state = {
      isOpen: this.status
    }
  }
  openMenu = () => {
    console.log('opened');
    if (this.state.isOpen) {
      this.setState({
        isOpen:false
      })
    } else {
      this.setState({
        isOpen:true
      })
    }
  }
  render() {
    let menuClass = 'nav__menu';
    if (this.state.isOpen) {
      menuClass += ' active'
    }
    return (
      <Card>
        <nav role="navigation">
          <div id="menuToggle" onClick={this.openMenu}>
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={menuClass}>
            <NavLink href="/topics" active={this.props.fromType === 'topics'}><li>Topics</li></NavLink>
            <NavLink href="/collections" active={this.props.fromType === 'collections'}><li>Collections</li></NavLink>
            <NavLink href="/posts" active={this.props.fromType === 'posts'}><li>Posts</li></NavLink>
            <NavLink href="/user" active={this.props.fromType === 'user'}><li>User</li></NavLink>
          </ul>
        </nav>
        <style jsx>{`
          #menuToggle {
            display: inline-block;
            position: relative;
            left: 30px;
            z-index: 1;
            -webkit-user-select: none;
            user-select: none;
          }
          #menuToggle input {
            display: block;
            width: 40px;
            height: 32px;
            position: absolute;
            top: -6px;
            left: 0px;
            cursor: pointer;
            opacity: 0; /* hide this */
            z-index: 2; /* and place it over the hamburger */
            -webkit-touch-callout: none;
          }
          #menuToggle span {
            display: block;
            width: 33px;
            height: 4px;
            margin-bottom: 5px;
            position: relative;
            background: #cdcdcd;
            border-radius: 3px;
            z-index: 1;
            transform-origin: 4px 0px;
            transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                        background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                        opacity 0.55s ease;
          }
          #menuToggle span:first-child {
            transform-origin: 0% 0%;
          }
          #menuToggle span:nth-last-child(2) {
            transform-origin: 0% 100%;
          }
          #menuToggle input:checked ~ span
          {
            opacity: 1;
            transform: rotate(45deg) translate(1px, -1px);
            background: #232323;
          }
          #menuToggle input:checked ~ span:nth-last-child(2)
          {
            opacity: 0;
            transform: rotate(0deg) scale(0.2, 0.2);
          }
          #menuToggle input:checked ~ span:nth-last-child(1)
          {
            transform: rotate(-45deg) translate(-1px, -2px);
          }
          .nav__menu {
            position: absolute;
            top: 0;
            width: 90vw;
            height: 100vh;
            padding: 1.4rem 0 0 0.4rem;
            margin: 0;
            background: #ededed;
            list-style-type: none;
            -webkit-font-smoothing: antialiased;
            transform-origin: 0% 0%;
            transform: translate(-100%, 0);
            transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
          }
          ul.active {
            transform: translate(0, 0);
          }
          .nav__menu li {
            margin: 0.6rem 0;
          }
        `}</style>
      </Card>
    )
  }
}

export default NavTrigger;