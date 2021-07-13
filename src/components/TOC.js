import React, {Component} from 'react';
import { Link } from 'react-router-dom';


export default class TOC extends Component{
    render(){
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i<data.length){
            lists.push(<li key={data[i].id}>
                <Link to={`/content/${data[i].id}`}>{data[i].title}</Link>
            </li>);
            i = i+1;
        }
        return(
            <nav>
                <ul>
                    {lists}
                </ul>    
            </nav>
        );
    }

}