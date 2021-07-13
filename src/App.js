import React, {Component} from "react";
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

// import A from './components/routerPractice/A';
// import B from './components/routerPractice/B';

import api from './api/api';

import Main from './components/main/Main';
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Board from "./components/main/Board";
import Detail from "./components/main/Detail";
import Write from "./components/main/Write";

import "./css/App.css";

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLogin:false
    }
  }

  logoutScreen = [<li><Link to="/signup">회원가입</Link></li>,<li><Link to="/login">로그인</Link></li>]
  loginScreen = [<li><Link to="/board">게시판</Link></li>,<li><Link to="/write">글쓰기</Link></li>]

  componentDidMount(){
    let token = window.sessionStorage.getItem('token');
    token ? this.setState({isLogin:true}) : this.setState({isLogin:false});
  }

  render(){
    // let token = window.sessionStorage.getItem('token');
    // token ? this.setState({isLogin:true}) : this.setState({isLogin:false});
    return(
      <BrowserRouter>
        <div className="App">
          <h2 className="App-header">강민정 게시판</h2>
          <div className="App-nav">
            <ul>
              <li><Link to="/">메인</Link></li>
              {this.state.isLogin ? this.loginScreen : this.logoutScreen }
              {/* <li><Link to="/signup">회원가입</Link></li>
              <li><Link to="/login">로그인</Link></li>
              <li><Link to="/board">게시판</Link></li>
              <li><Link to="/write">글쓰기</Link></li> */}
            </ul>
          </div>
          <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/board" component={Board}></Route>
            <Route path="/write" component={Write}></Route>
            <Route path="/detail" component={Detail}></Route>
            <Route path="/contnet/"></Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

// // axios 실습
// export default class App extends Component{
//     constructor(props){
//       super(props);
//       this.state = {
//         message:'',
//         serverMessage:''
//       }
//     }
//     handleMessage = (e)=>{
//       this.setState({message:e.target.value})
//     }
//     handleSend = async ()=>{
//       let data = await api.test(this.state.message);
//       console.log(data)
//       this.setState({serverMessage:data.data})
//     } 

//     render(){
//       return(
//         <div>
//           <h2>{this.state.serverMessage}</h2>

//           <input type="text" onChange={this.handleMessage}/>
//           <input type="button" value="전송" onClick={this.handleSend}/>
//         </div>
//       );
//   }
// }


// import TOC from "./components/TOC";

// // Router 실습
// export default class App extends Component{
//   constructor(props){
//     super(props);
//     this.max_content_id = 3;
//     this.state={
//       mode:"read",
//       selected_content_id:1,
//       contents:[
//         {id:1,title:'1번글',desc:'1번 내용'},
//         {id:2,title:'2번글',desc:'2번 내용'},
//         {id:3,title:'3번글',desc:'3번 내용'},
//         {id:4,title:'3번글',desc:'3번 내용'}
//       ],
//       value:0
//     }
//   }
//   render(){
//     return(
//       <BrowserRouter>
//         <div>
//           <h2>Hello world!</h2>
//           <ul>
//             <li><Link to="/">메인</Link></li>
//             <li><Link to="/A">A</Link></li>
//             <li><Link to="/B">B</Link></li>
//           </ul>
//           <TOC  data={this.state.contents} onChangePage={function (_id) {
//           this.setState({selected_content_id:Number(_id)})
//         }.bind(this)}></TOC>
//           <Switch>
//             <Route exact path="/">main입니다.</Route>
//             <Route path="/A" component={A}/>
//             <Route path="/B" component={B}/>
//             <Route path="/content/:id"><Board/></Route>
//           </Switch>
//         </div>
//       </BrowserRouter>
//     )
//   }
// }
