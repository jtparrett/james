import React from 'react'
import injectSheet from 'react-jss'

// Components
import Header from '../components/header'

const styles = {
  main: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center'
  },
  header: {
    width: 340,
    padding: 30,
    flex: 'none',
    order: 1
  },
  item: {
    flex: 1,
    boxSizing: 'border-box'
  },
  image: {
    maxHeight: '80vh',
    maxWidth: '80%',
    marginLeft: 'auto',
    display: 'block'
  }
}

class Home extends React.Component {
  render(){
    const {classes} = this.props
    return (
      <main className={classes.main}>
        <div className={classes.header}>
          <Header />
        </div>
        <div className={classes.item}>
          <img src="https://picsum.photos/450/670/?random" className={classes.image} alt="Title" />
        </div>
        <div className={classes.item}>
          <img src="https://picsum.photos/450/670/?random" className={classes.image} alt="Title" />
        </div>
      </main>
    )
  }
}

export default injectSheet(styles)(Home)