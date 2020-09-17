import React,{Component} from 'react';

//import { JSONToHTMLTable } from '@kevincobain2000/json-to-html-table';
//import NestedJsonTable from 'react-nested-json-table';

import Button from 'react-bootstrap/Button'
//import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
//import ToggleButton from 'react-bootstrap/ToggleButton'

import {Method1} from './Method1'
import {Method2} from './Method2'

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Redirect , Router } from 'react-router-dom'

import { Form } from 'react-bootstrap';
import history from './history';



export class Home extends Component {


    state = {
        redirect: false
    }
      
    setRedirect1 = () => {
        this.setState({
          redirect: true
        })
    }
      
    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/1' />
        }
    }

    
    render(){

        return(

            <Router history={history}>
                <div className="container">
                    <switch>
                        <Route path='/1' component={Method1} />
                        <Route path='/2' component={Method2} />
                    </switch>
                </div>
                <div>
                    <h1>Welcome to our app ! Choose a method :</h1>
                </div>
                <div>
                    {this.renderRedirect()}
                    <Button variant="primary" size="lg" block onClick={() => history.push('/1')}>Method 1</Button>
                </div>
                <div>
                    <Button variant="primary" size="lg" block onClick={() => history.push('/2')}>Method 2</Button>
                </div>
            </Router>
        )
    }

}