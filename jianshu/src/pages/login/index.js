import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { LoginWarrper,LoginBox,Input,Button } from './style'
import { Redirect } from 'react-router-dom';


class Login extends Component {
render(){
  const { login }=this.props;
  if(!login){
  return(
    <LoginWarrper>
    <LoginBox>
    <Input placeholder='账号' ref={(input)=>{this.account=input}}/>
    <Input type='password' placeholder='密码' ref={(input)=>{this.password=input}}/>
    <Button onClick={()=>{this.props.sent(this.account,this.password)}}>登入</Button>
    </LoginBox>
    </LoginWarrper>
  );}else {
    return (<Redirect to='/'/>)
  }
}
componentDidMount(){

  }
}
const stateProps=(state)=>({
  login:state.getIn(['login','login'])
})

const dispacthProps=(dispatch)=>({
  sent(account,password){
    axios.get('/api/login.json?id='+account+"&passwd="+password).then((res)=>{
      const action={
        type:"login_vri",
        login:res.data.data.login
      }
      dispatch(action);
    })
  }
})

export default connect(stateProps,dispacthProps)(Login);
