import React,{ Component } from 'react';
import { RecommendWarpper,RecommendItem,RecommendQrcode } from '../style'
import { connect } from 'react-redux';

class Recommend extends Component{
  render(){
    const { recImg }=this.props;
    return(
      <RecommendWarpper>
      { recImg.map((item)=>{
        return <RecommendItem key={item.get('id')} alt='' imgUrl={item.get('imgUrl')}/>
      })}
      <RecommendQrcode>
      <img className='Qrcode' alt='' src='http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png'/>
      <div className='title'>下载简书App > </div>
      </RecommendQrcode>
      </RecommendWarpper>
    )
  }
}

const stateProps=(state)=>{
  return {
    recImg:state.getIn(['home','recommendImg'])
  }
}
export default connect(stateProps,null)(Recommend);
