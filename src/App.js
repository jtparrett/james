import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {create} from 'jss'
import jssNested from 'jss-nested'
import jssCamelCase from 'jss-camel-case'
import jssVendorPrefixer from 'jss-vendor-prefixer'
import jssDefaultUnit from 'jss-default-unit'
import injectSheet, {JssProvider} from 'react-jss'

// Components
import Menu from './components/menu'
import Home from './views/home'

const jss = create()
jss.use(jssNested(), jssCamelCase(), jssVendorPrefixer(), jssDefaultUnit())

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
        <JssProvider jss={jss}>
          <div className={this.props.classes.main}>
            <Route exact path="/" component={Home}/>
          </div>
        </JssProvider>
      </BrowserRouter>
    )
  }
}

export default injectSheet(styles)(App)