import React from 'react'
import {Link} from 'react-router-dom'
import classNames from 'classnames'
import injectSheet from 'react-jss'

const styles = {
  main: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    flexDirection: 'column'
  },
  open: {
    background: 'rgba(255, 255, 255, 0.94)'
  },
  trigger: {
    flex: 'none',
    appearance: 'none',
    border: 'none',
    padding: 30,
    background: 'transparent',
    outline: 'none',
    pointerEvents: 'all',
    marginLeft: 'auto',
    display: 'block',
    cursor: 'pointer'
  },
  icon: {
    width: 30
  },
  overlay: {
    flex: 'none',
    pointerEvents: 'all',
    margin: 'auto 0',
    padding: '0 10vw 10vw'
  },
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  },
  item: {
    fontSize: 30,
    fontWeight: 700,
    color: '#000',
    textDecoration: 'none',
    display: 'block',
    padding: 15
  }
}

class Menu extends React.Component {
  state = {
    open: false
  }

  toggle = () => {
    this.setState(({open}) => ({
      open: !open
    }))
  }

  render() {
    const {classes} = this.props
    return (
      <nav className={classNames({
        [classes.main]: true,
        [classes.open]: this.state.open
      })}>
        <button className={classes.trigger} onClick={this.toggle}>
          <img src={require('../assets/menu.svg')} alt="Menu" className={classes.icon} />
        </button>

        { this.state.open &&
          <div className={classes.overlay}>
            <ul className={classes.list}>
              <li>
                <Link to="/" className={classes.item}>Home</Link>
              </li>
              <li>
                <Link to="/" className={classes.item}>About</Link>
              </li>
              <li>
                <Link to="/" className={classes.item}>Contact</Link>
              </li>
            </ul>
          </div>
        }
      </nav>
    )
  }
}

export default injectSheet(styles)(Menu)