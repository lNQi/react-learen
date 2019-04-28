import { fromJS } from 'immutable';

const defaultSate=fromJS({
  title:"",
  data: ""
});
export default(state=defaultSate,action)=>{
  switch (action.type) {
    case 'getData':
      return state.merge({
        title:fromJS(action.title),
        data:fromJS(action.data)
      })
    default:

  }
return state;
}
