import * as conStants from './constants.js';
import { fromJS } from 'immutable';

const defaultSate=fromJS({
  fouces:false,
  list:[],
  page:1,
  totalPage:1,
  moveIn:false
});
export default(state=defaultSate,action)=>{
  switch (action.type) {
    case conStants.HEADER_FOUSUC:
      return state.set('fouces',true);
    case conStants.HEADER_BLUR:
      return state.set('fouces',false);
    case 'chanage_list':
      return state.merge({
        list:action.data,
        totalPage:action.totalPage
      });
    case conStants.MOVE_ENTER:
      return state.set('moveIn',true);
    case conStants.MOVE_LEAVA:
      return state.set('moveIn',false);
    case conStants.CHANAGE_LIST:
      return state.set('page',action.page);
    default:
  }
return state;
}
