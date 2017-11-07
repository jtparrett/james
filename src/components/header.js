import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  main: {
    textAlign: 'center',
    overflow: 'hidden'
  },
  logo: {
    width: 195,
    display: 'block',
    margin: '0 auto 5px'
  },
  sub: {
    textTransform: 'uppercase',
    fontSize: 15,
    margin: [0, 0, 20],
    fontWeight: 700,
    color: '#737373',
    letterSpacing: 2,
    paddingLeft: 2
  },
  social: {
    display: 'flex',
    justifyContent: 'center',
    marginRight: -10
  },
  link: {
    width: 30,
    height: 30,
    background: '#000',
    marginRight: 10
  },
  icon: {
    padding: 3,
    width: 24,
    height: 24
  }
}

const Header = ({classes}) => (
  <header className={classes.main}>
    <img src={require('../assets/logo.svg')} className={classes.logo} alt="James Parrett" />
    <p className={classes.sub}>- Photographer -</p>
    <div className={classes.social}>
      <a href="https://www.instagram.com/james.parrett/" target="_blank" className={classes.link}>
        <img src={require('../assets/instagram.svg')} className={classes.icon} />
      </a>
      <a href="https://twitter.com/JamesOParrett" target="_blank" className={classes.link}>
        <img src={require('../assets/twitter.svg')} className={classes.icon} />
      </a>
      <a href="https://www.linkedin.com/in/jamesparrett/" target="_blank" className={classes.link}>
        <img src={require('../assets/linked-in.svg')} className={classes.icon} />
      </a>
    </div>
  </header>
)

export default injectSheet(styles)(Header)