import React from 'react';
import PropTypes from 'prop-types'; 
import Error from '../pages/_error';
import { Wrapper } from '../styles/components/Wrapper';
import { Container } from '../styles/components/Container';
import NavBar from '../component/NavBar';
import Header from '../styles/components/Header'
import { MainContent } from '../styles/components/Content';
import NavTrigger from '../styles/components/NavTrigger';

export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };
  state = {
    devicesWidth: null    
  }
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
  componentDidMount() {
    let width = document.documentElement.clientWidth;
    this.setState({
      devicesWidth: width
    });
  }
  render() {
    
    return (
      <Wrapper>
        { ( this.state.devicesWidth <= 750 ) && <NavTrigger /> }
        { ( this.state.devicesWidth > 750 ) && <NavBar fromType={this.props.fromType} />}
        <Container>
          <MainContent padding={this.props.padding}>
            { this.renderChildren() }
          </MainContent>
        </Container>
      </Wrapper>
    );
  }
}