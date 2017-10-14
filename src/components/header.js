import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  main: {
    textAlign: 'center'
  },
  logo: {
    width: 195,
    display: 'block',
    margin: '0 auto 5px'
  },
  sub: {
    textTransform: 'uppercase',
    fontSize: 15,
    margin: 0,
    fontWeight: 700,
    color: '#737373',
    letterSpacing: 2,
    paddingLeft: 2
  }
}

const Header = ({classes}) => (
  <header className={classes.main}>
    <img src={require('../assets/logo.svg')} className={classes.logo} />
    <p className={classes.sub}>Photographer</p>
  </header>
)

export default injectSheet(styles)(Header)