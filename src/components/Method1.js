import React,{Component} from 'react';
import { JSONToHTMLTable } from '@kevincobain2000/json-to-html-table';


export class Method1 extends Component {

    render(){
        const myJson = require('./Result.json');

        return(
            <JSONToHTMLTable data={myJson} tableClassName="table table-sm"/>)
    }

}