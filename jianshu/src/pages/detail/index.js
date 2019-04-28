import React,{ Component } from 'react';
import { DetailWarpper,Header,Content } from './style'
import { connect } from 'react-redux';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class Detail extends Component{
  render(){
    return (
      <DetailWarpper>
      <Header>{this.props.title}</Header>
      <Content dangerouslySetInnerHTML={{__html:this.props.data}}>
      </Content>
      </DetailWarpper>
    )
  }
  componentDidMount(){
    this.props.getData(this.props.match.params.id);
  }
}

const mapStroe=(store)=>({
  title:store.getIn(['detail','title']),
  data:store.getIn(['detail','data'])
})
const dispacthProps=(dispatch)=>({
  getData(id){
    axios.get('/api/detail.json?id='+id).then((res)=>{
      const action={
        type:'getData',
        title:res.data.data.title,
        data:res.data.data.data
      };
      dispatch(action);
    })
  }

})

export default connect(mapStroe,dispacthProps)(withRouter(Detail));
