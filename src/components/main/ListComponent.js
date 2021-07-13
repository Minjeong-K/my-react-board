import React, {Component} from 'react'
import { Link } from 'react-router-dom'

const ListComponent = ({id,key,title,date,summary}) =>{
    return(
        <div id={id}>
            <h3 className="board-title">{title}</h3>
            <p className="board-date">{date}</p>
            <p className="board-content">{summary}</p>
            <Link to={{
                pathname:"/detail",
                state:{id,title,date,summary,key}
            }}>더보기</Link>
        </div>
    )
}

export default ListComponent;