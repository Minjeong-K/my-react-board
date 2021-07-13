import React, {Component} from 'react';
import api from '../../api/api'

export default class Write extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:'',
            content:''
        }
    }

    handleTitle = (e) =>{
        this.setState({title:e.target.value})
    }
    handleContent = (e) =>{
        this.setState({content:e.target.value})
    }
    handlePosting = async ()=>{
        let token = window.sessionStorage.getItem('token');
        let data = await api.posting(this.state.title, this.state.content, token);
        console.log(data)
        // if(data != null && data.status == 200){
        //     this.props.history.push('/board');
        // }
    }


    render(){
        return(
            <div className="board">
                <h2>글 작성하기</h2>
                <p>
                    <input className="title-input" type="text" name="title" placeholder="제목을 입력하세요." onChange={this.handleTitle}/>
                </p>
                <p>
                    <textarea className="content-input" name="content" placeholder="내용을 입력하세요." onChange={this.handleContent}/>
                </p>
                <input className="sign-button" type="button" value="업로드" onClick={this.handlePosting}/>
            </div>
        )
    }
}