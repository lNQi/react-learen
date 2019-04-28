import { fromJS } from 'immutable';

const defaultSate=fromJS({
  login:false
});
export default(state=defaultSate,action)=>{
  switch (action.type) {
    case "login_vri":
      return state.set('login',action.login);
    case "outLogin":
      return state.set('login',false)
    default:

  }
return state;
}
