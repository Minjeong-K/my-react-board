import axios from 'axios';

axios.defaults.baseURL = "http://3.141.201.244:3000" // 여기서 작성해놓으면

export default{
    login(id, password){
        return axios({
            method:'post',
            url:'/auth/login',
            data:{
                id:id,
                password:password
            }
        }).catch((err)=>{
            if (err.response.status === 401){
                alert('아이디 혹은 비밀번호가 틀렸습니다.')
            }
            else if(err.response.status === 403){
                alert('빈칸을 입력하였습니다.')
            }
        })
    },
    signUp(id, password, name){
        return axios({
            method:'post',
            url:'/auth/register',
            data:{
                id:id,
                password:password,
                name:name
            }
        }).catch((err)=>{
            if(err.response.status === 403){
                alert('이미 가입된 아이디입니다.')
            }
        })
    },
    getDatas(token){
        return axios({
            method:'get',
            url:'/post/'+token
        }).catch((err)=>{
            if(err.response.status === 404){
                alert('작성된 글이 존재하지 않습니다. 글을 작성해주세요.')
            }
        })
    },
    posting(title, content,token){
        return axios({
            method:'post',
            url:'/post',
            data:{
                title:title,
                content:content,
                token:token
            }
        }).catch((err)=>{
            alert('업로드에 실패하였습니다.')
            console.log(err)
        })
    }
    // test(text){
    //     return axios({
    //         method:'get',
    //         url:'/auth/test/' + text,  // 여기서 http://3.141.201.244:3000/auth/test/ 로 작성
    //     }).catch((err)=>{
    //         console.log(err);
    //     })
    // },
    // post(name){
    //     return axios({
    //         method:'post',
    //         url:'/post',
    //         data:{
    //             name:name
    //         }
    //     })
    // }
}