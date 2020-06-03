import React from 'react'
import {BrowserRouter as Router , Route,Redirect, Switch} from 'react-router-dom'
import About from '../Components/About'   
import Form from '../Components/Form'  
import Reports from '../Components/Reports'  

export default () => (
    <Router>
        <Switch>
            <Route path='/Report' component={Reports} />              
            <Route exact path='/About' component={About} />
            <Route path='/Form' component={Form} />
            <Redirect from="*" to ='/Report'  />
        </Switch>
    </Router>
)