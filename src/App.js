import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import injectSheet from 'react-jss'

// Components
import Menu from './components/menu'
import Home from './views/home'

const styles = {
  main: {
    fontFamily: 'Robot, Helvetics Neue, sans-serif',
    fontSmoothing: 'antialiased'
  }
}

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className={this.props.classes.main}>
          <Menu />
          <Route exact path="/" component={Home}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default injectSheet(styles)(App)