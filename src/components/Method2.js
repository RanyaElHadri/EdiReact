import React,{Component} from 'react';
import NestedJsonTable from 'react-nested-json-table';

export class Method2 extends Component {
    
    render(){
        const myJson = require('./Result.json');

        return(
            <NestedJsonTable data={myJson} expandAll={true} />
        )
    }

}