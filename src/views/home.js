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
    width: 400,
    padding: 30,
    flex: 'none',
    order: 1,
    boxSizing: 'border-box'
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
  },
  '@media (max-width: 1023px)': {
    main: {
      height: 'auto',
      flexWrap: 'wrap',
      padding: '100px 0 30px'
    },
    header: {
      width: '100%',
      padding: '30px 0',
      order: -1
    },
    image: {
      maxHeight: 'none',
      marginRight: 'auto'
    },
    item: {
      flex: 'none',
      width: '50%'
    }
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
          <img src="https://placehold.it/450x670" className={classes.image} alt="Title" />
        </div>
        <div className={classes.item}>
          <img src="https://placehold.it/450x670" className={classes.image} alt="Title" />
        </div>
      </main>
    )
  }
}

export default injectSheet(styles)(Home)