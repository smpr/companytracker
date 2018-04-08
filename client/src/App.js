import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import CompCreate from './components/Company/CompCreate'
import CompHome from './components/Company/CompHome'
import CompEdit from './components/Company/CompEdit'
import CompShow from './components/Company/CompShow'

import ConHome from './components/Contact/ConHome'
import ConCreate from './components/Contact/ConCreate'
import ConShow from './components/Contact/ConShow'
class App extends Component {
  
  render() {
    return (
      <MuiThemeProvider>
      <Router>

    


      <Switch>
    
        <Route exact path="/" component={CompHome} />
    
    
        <Route exact path="/Company" component={CompHome} />
        <Route exact path="/Company/Create" component={CompCreate} />
        <Route exact path="/Company/:compId/Edit" component={CompEdit} />
        <Route exact path="/Company/:compId/Contact" component={ConHome} />
        <Route exact path="/Company/:compId/Contact/Create" component={ConCreate} />
        <Route exact path="/Company/:compId/Contact/:conId" component={ConShow} />
        <Route exact path="/Company/:compId" component={CompShow} />
 
        
        
    
      </Switch>
    
    </Router>
   </MuiThemeProvider>
    );
  }
}

export default App;
