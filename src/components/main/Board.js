import axios from 'axios';
import React, {Component} from 'react';
// import {useParams} from 'react-router-dom';
import api from '../../api/api'
import '../../css/board.css'
import ListComponent from './ListComponent'

class Board extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }

    getDatas = async () => {
        let token = window.sessionStorage.getItem('token');
        let datas = await api.getDatas(token);
        console.log(datas.data)
        this.setState({data:datas.data})
    }

    componentDidMount(){
        this.getDatas();
    }

    render(){
        const {data} = this.state
        return(
            <div className="board">
                {data.map((data)=>{
                    return(
                        <ListComponent id={data.id} key={data.id} title={data.title} summary={data.content.slice(0,100)} date={data.date}/>
                    )
                })}
            </div>
        )
    }
}


// const Board = () => {
//     const {id} = useParams();
//     console.log(id)
//     return(
//         <div>
//             {id}
//         </div>
//     )
// }

export default Board;

