import React from 'react';
import PropTypes from 'prop-types'; 
import Error from '../pages/_error';
import { Wrapper } from '../styles/components/Wrapper';
import { Container } from '../styles/components/Container';
import NavBar from '../component/NavBar';
import Header from '../styles/components/Header'
import { MainContent } from '../styles/components/Content';
export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };
  renderChildren() {
    const { children, error } = this.props;
    if (error) {
      return (
        <Error statusCode={this.props.error} />
      );
    } else {
      return children
    }
  }
  render() {
    
    return (
      <Wrapper>
        <NavBar fromType={this.props.fromType} />
        <Container>
          <Header title={this.props.title} />
          <MainContent>
          { this.renderChildren() }
          </MainContent>
        </Container>
      </Wrapper>
    );
  }
}