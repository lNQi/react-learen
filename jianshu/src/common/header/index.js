import React,{ Component } from 'react'
import { SearchInfoItem,SearchInfoTitle,SearchInfoSwitch,HeaderWarapper,Logo,Nav,NavItem,NavSearch,Addtion,Button,SearchWarpper,SearchInfo } from './style.js';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import * as actionCreate from './actionCreate';
import { Link } from 'react-router-dom';

class header extends Component{
  getListArea(){
    const { fouces,list,page,MoveEnter,MoveLeave,moveIn,HandlerClick,totalPage }=this.props;
    const newList=list.toJS();
    const pageList=[]
    if(newList.length){
    for(let i=(page-1)*10;i<page*10;i++){
      pageList.push(
        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
      )
    }
  }

    if(fouces || moveIn){
      return (
        <SearchInfo
        onMouseEnter={MoveEnter}
        onMouseLeave={MoveLeave}
        >
        <SearchInfoTitle>热门搜索
        <SearchInfoSwitch onClick={() => HandlerClick(page,totalPage,this.icon)}>
        <span ref={(icon)=>{this.icon=icon}} className="iconfont spin">&#xe68c;</span>
        换一批</SearchInfoSwitch></SearchInfoTitle>
        <div>
        {pageList}
        </div>
        </SearchInfo>
      )
    }else {
      return null;
    }
  }
  render(){
    const { fouces,SearchFoucus,SerachBlur,list,login,out }=this.props;
    return (
      <div>
      <HeaderWarapper><Link to='/'><Logo /></Link> <Nav>
      <NavItem className='left active'>首页</NavItem>
      <NavItem className='left'>下载App</NavItem>
      {
        login ? <NavItem className='right' onClick={out}>退出</NavItem> : <Link to='/login'><NavItem className='right'>登入</NavItem></Link>
      }
      <NavItem className='right'>
      <span className="iconfont">&#xe636;</span></NavItem>
      <SearchWarpper>
      <CSSTransition
       in={fouces}
       timeout={200}
       classNames="slide">
      <NavSearch onFocus={()=>SearchFoucus(list)} onBlur={SerachBlur} className={fouces?'fouces':''}>
      </NavSearch>
      </CSSTransition>
      <span className={fouces?'iconfont fouce zoom':'iconfont zoom'}>&#xe623;</span>
      {this.getListArea()}
      </SearchWarpper>
      </Nav>
      <Addtion><Link to='/wirter'>
      <Button className='writ'><span className="iconfont">&#xe6a4;</span>写文章</Button></Link>
      <Button className='reg'>注册</Button>
      </Addtion>
      </HeaderWarapper></div>
    );
  }
}

const mapStateToProps=(state)=>{
  return{
    fouces:state.get('header').get('fouces'),
    list:state.get('header').get('list'),
    page:state.get('header').get('page'),
    moveIn:state.get('header').get('moveIn'),
    totalPage:state.get('header').get('totalPage'),
    login:state.getIn(['login','login'])
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    SearchFoucus(list){
      (list.size===0) && dispatch(actionCreate.getList());
      dispatch(actionCreate.searchFoucus());
    },
    SerachBlur(){
      dispatch(actionCreate.serachBlur());
    },
    MoveLeave(){
      dispatch(actionCreate.moverLeave());
    },
    MoveEnter(){
      dispatch(actionCreate.moverEnter());
    },
    HandlerClick(page,totalPage,icon){
      let orginAngle=icon.style.transform.replace(/[^0-9]/ig,'');
      if(orginAngle){
        orginAngle=parseInt(orginAngle,10);
      }else {
        orginAngle=0;
      }
      icon.style.transform='rotate('+(orginAngle+360)+'deg)';
      if(page<totalPage){
      dispatch(actionCreate.listChanger(page+1))
      }else{
      dispatch(actionCreate.listChanger(1))
      }
    },
    out(){
      const action={
        type:'outLogin'
      }
      dispatch(action);
    }

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(header);
