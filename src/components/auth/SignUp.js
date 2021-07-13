import React, {Component} from 'react';
import '../../css/auth.css'
import { Link } from 'react-router-dom';
import api from '../../api/api'

export default class SignUp extends Component{
    state={
        id:'',
        password:'',
        name:''
    }
    handleId = (e) =>{
        this.setState({id:e.target.value})
    }
    handlePw = (e) =>{
        this.setState({password:e.target.value})
    }
    handleName = (e) =>{
        this.setState({name:e.target.value})
    }
    handleSignUp = async ()=>{
        let data = await api.signUp(this.state.id,this.state.password,this.state.name);
        if(data != null && data.status == 200){
            this.props.history.push('/login');
        }
        // console.log(data)
    } 
    render(){
        return(
            <div>
                <h2>회원가입</h2>
                <p>
                    <input className="sign-input" type="text" name="id" placeholder="아이디를 입력하세요" onChange={this.handleId}/>
                </p>
                <p>
                    <input className="sign-input" type="password" name="password" placeholder="비밀번호를 입력하세요" onChange={this.handlePw}/>
                </p>
                <p>
                    <input className="sign-input" type="text" name="password" placeholder="이름을 입력하세요" onChange={this.handleName}/>
                </p>
                <input className="sign-button" type="button" value="회원가입" onClick={this.handleSignUp}/>
                <p className="sign-link"><Link to="/login">로그인하러가기</Link></p>
            </div>
        )
    }
}