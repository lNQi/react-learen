import React, { Component } from 'react';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style.js';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import axios from 'axios';
import { connect } from 'react-redux';


class Home extends Component {

hanleScrllTop(){
  window.scrollTo(0,0);
}
render(){
  return(
    <HomeWrapper>
    <HomeLeft>
    <img className="banner-img" alt='' src="//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
    <Topic />
    <List />
    </HomeLeft>
    <HomeRight>
    <Recommend />
    <Writer />
    </HomeRight>
    {this.props.showSrocll?<BackTop onClick={this.hanleScrllTop}>回到顶部</BackTop>:null}

    </HomeWrapper>
  );
}
  componentDidMount(){
    this.props.chanageHome();
    this.bindEvents();
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.chanageScroll)
  }
  bindEvents(){
    window.addEventListener('scroll',this.props.chanageScroll)
  }
}
const stateProps=(state)=>({
showSrocll:state.getIn(['home','showSrocll'])
})

const dispacthProps=(dispatch)=>{
  return {
    chanageHome(){
      axios.get('/api/home.json').then((res)=>{
        const result=res.data.data;
        const action={
          type:'chanage_home',
          topicList:result.topicList,
          recommendImg:result.recommendImg,
          articleList:result.articleList
        };
        dispatch(action);
      })
    },chanageScroll(){
      if(document.documentElement.scrollTop<400){
        const action ={
          type:"showSrocll",
          show:false
        }
        dispatch(action);
      }else {
        const action ={
          type:"showSrocll",
          show:true
        }
        dispatch(action);
      }
    }
  }
}

export default connect(stateProps,dispacthProps)(Home);
