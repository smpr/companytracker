import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Container, FormContainer, BodyContainer, Style, TextLabelStyle } from "../src/components/StyledComponents/DefaultStyle"
import CompCreate from './components/Company/CompCreate'
import CompHome from './components/Company/CompHome'
import CompEdit from './components/Company/CompEdit'
import CompShow from './components/Company/CompShow'

import ConHome from './components/Contact/ConHome'
class App extends Component {
  render() {
    return (
      <Router>

    


      <Switch>
    
        <Route exact path="/" component={CompHome} />
    
    
        <Route exact path="/Company" component={CompHome} />
        <Route exact path="/Company/Create" component={CompCreate} />
        <Route exact path="/Company/:compId/Edit" component={CompEdit} />
        <Route exact path="/Company/:compId/Contact" component={ConHome} />
        <Route exact path="/Company/:compId" component={CompShow} />
 
        
        
    
      </Switch>
    
    </Router>
   
    );
  }
}

export default App;
