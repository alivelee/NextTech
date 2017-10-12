import css from 'styled-jsx/css';
export default css`
  nav {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    padding: 10px;
    background-color: #1E1E1E;
    color: white;
    margin-right: 50px;
    width: 40px;
    height: 100vh;
  }
  nav ul {
    margin: 0;
    padding: 0;
  }
  nav ul li {
    display: block;
    list-style: none;
    height: 40px;
    line-height: 40px;
    margin: 20px 0;
  }
  nav ul li a {
    display: inline-block;
    text-decoration: none;
    padding-left: 5px;
    display: none;
  }
  nav i {
    font-size: 1.8rem;
    display: inline-block;
  }
`;