import React,{ Component } from 'react';
import { TopicWrapper,TopicItem } from '../style';
import { connect } from 'react-redux';

class Topic extends Component{
  render(){
    const { list } =this.props;
    return(
      <TopicWrapper>
      {
        list.map((item)=>{
          return <TopicItem key={item.get('id')}> {item.get('title')}</TopicItem>
        })
      }
      </TopicWrapper>
    )
  }
}
const mapState = (state)=>{
  return{
    list:state.get('home').get('topicList')
  }
}

export default  connect(mapState,null)(Topic);
