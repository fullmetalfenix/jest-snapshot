import React from 'react';

const navStyles = {
  background: 'red',
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignContent: 'space-around',
      }    
  const linkStyles = {
      color: 'black',
      textDecoration: "none",
  }

class Header extends React.Component {

    render() {
      
      return (
        <nav style={navStyles}>
          <a style={linkStyles} href="/">Home</a> |
          <a style={linkStyles} href="/about">About</a> |
          <a style={linkStyles} href="/other-projects">Other Projects</a> |
          <a style={linkStyles} href="/contact">Contact</a>
        </nav>
      );
    }
  }

export default Header;