import * as conStants from './constants.js';
import axios from 'axios';
import { fromJS } from 'immutable';


export const searchFoucus=()=>({
  type:conStants.HEADER_FOUSUC
})
export const serachBlur = ()=>({
  type:conStants.HEADER_BLUR
})
export const moverEnter =()=>({
  type:conStants.MOVE_ENTER
})
export const moverLeave =()=>({
  type:conStants.MOVE_LEAVA
})
export const listChanger=(page)=>({
  page:page ,
  type:conStants.CHANAGE_LIST
})

export const getList =()=>{
  return ((dispatch) => {
    axios.get('/api/headerList.json').then((res)=>{
      const action={
        type:'chanage_list',
        data:fromJS(res.data.data),
        totalPage:Math.ceil(res.data.data.length/10)
      };
      dispatch(action);
    }).catch(()=>{
      console.log('error');
    })
  });
};
