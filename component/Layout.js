import React from 'react';
import PropTypes from 'prop-types'; 

import { Wrapper } from '../styles/components/Wrapper';
import { Container } from '../styles/components/Container';
import NavBar from '../component/NavBar';
export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };
  render() {
    const { children } = this.props;
    return (
      <Wrapper>
        <NavBar />
        <Container>
          { children }
        </Container>
      </Wrapper>
    );
  }
}