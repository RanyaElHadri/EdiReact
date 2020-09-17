import React from 'react';
import logo from './logo.svg';
import './App.css';

//import { JSONToHTMLTable } from '@kevincobain2000/json-to-html-table';
//import NestedJsonTable from 'react-nested-json-table';

import Button from 'react-bootstrap/Button'
//import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
//import ToggleButton from 'react-bootstrap/ToggleButton'

import {Method1} from './components/Method1'
import {Method2} from './components/Method2'
import {Home} from './components/Home'

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Redirect } from 'react-router-dom'

import { Form } from 'react-bootstrap';


function App() {

  return (

    <BrowserRouter>
        <div className="container">
          <Home/>
        </div>
    </BrowserRouter>

    

    //<Button variant="primary">OK</Button>

    //<NestedJsonTable data={myJson} expandAll={true} />
    
    //<JSONToHTMLTable data={myJson} tableClassName="table table-sm"/>

    //<div className="App">
      //{/* ===================== */}
      //{/* HOW TO USE IT         */}
      //{/* ===================== */}
      //<JsonToTable json={myJson} />
      //{/* ===================== */}
    //</div>

    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
  );
}

export default App;
