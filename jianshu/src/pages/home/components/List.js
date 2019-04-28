import React,{ Component } from 'react';
import { ListItem,ListInfo,LoadMore } from '../style';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

class List extends Component{
  render(){
    const { articleList,loadMore,page }=this.props;
    return(
      <div>
      {
        articleList.map((item,index)=>{
          return(
            <Link to={"/detail/"+item.get('id')}>
            <ListItem key={index}>
            <img alt='' className='pic' src={item.get('imgUrl')}/>
            <ListInfo>
            <h3 className='title'>{item.get('title')}</h3>
            <p className='desc'>{item.get('desc')}</p>
            </ListInfo>
            </ListItem>
            </Link>
          )
        })
      }
      <LoadMore onClick={()=>loadMore(page)}>加载更多</LoadMore>
      </div>

    )
  }
}
const mapState=(state)=>{
  return{
    articleList:state.getIn(['home','articleList']),
    page:state.getIn(['home','page'])
    }
  }

const dispatchProps=(display)=>({

  loadMore(page){
    axios.get('/api/newList.json?page='+page).then((res)=>{
      const action ={
        type:'add_list',
        data:res.data.data,
        page:page
      };
      display(action);
    })
  }
})

export default connect(mapState,dispatchProps)(List);
