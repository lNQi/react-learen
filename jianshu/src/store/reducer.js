import { combineReducers } from 'redux-immutable';
import headerStroe from '../common/header/store.js';
import homeStroe from '../pages/home/store/reducer';
import detailStroe from '../pages/detail/store';
import loginStore from '../pages/login/store';

const reducer =combineReducers({
  header:headerStroe,
  home:homeStroe,
  detail:detailStroe,
  login:loginStore
})
export default reducer;
