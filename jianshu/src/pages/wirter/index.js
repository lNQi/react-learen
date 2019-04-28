import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class Writer extends Component {
render(){
  const { login }=this.props;
  if(login){
  return(
    <div>Writer</div>
  );}else {
    return (<Redirect to='/login'/>)
  }
}
componentDidMount(){

  }
}
const stateProps=(state)=>({
  login:state.getIn(['login','login'])
})


export default connect(stateProps,null)(Writer);
