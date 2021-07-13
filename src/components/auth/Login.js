import React, {Component} from 'react';
import '../../css/auth.css'
import { Link } from 'react-router-dom';

import api from '../../api/api';

export default class Login extends Component{
    state={
        id:'',
        password:''
    }
    handleId = (e) =>{
        this.setState({id:e.target.value})
    }
    handlePw = (e) =>{
        this.setState({password:e.target.value})
    }
    handleLogin = async ()=>{
        let data = await api.login(this.state.id,this.state.password);
        // console.log(data)
        if (data != null && data.status === 200){
            console.log(data)
            window.sessionStorage.setItem("token",data.data.token)
            this.props.history.push('/board');
        }
    } 
    
    render(){
        return(
            <div>
                <h2>로그인</h2>
                <p>
                    <input className="sign-input" type="text" name="id" placeholder="아이디를 입력하세요" onChange={this.handleId}/>
                </p>
                <p>
                    <input className="sign-input" type="password" name="password" placeholder="비밀번호를 입력하세요" onChange={this.handlePw}/>
                </p>
                <input className="sign-button" type="button" value="로그인" onClick={this.handleLogin}/>
                <p className="sign-link"><Link to="/login">회원가입하러가기</Link></p>
            </div>
        )
    }
}