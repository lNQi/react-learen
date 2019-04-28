import { fromJS } from 'immutable';

const defaultSate=fromJS({
  topicList:[],
  recommendImg:[],
  articleList:[],
  page:1,
  showSrocll:false,
});
export default(state=defaultSate,action)=>{
  switch (action.type) {
    case "chanage_home":
      return state.merge({
        topicList:fromJS(action.topicList),
        recommendImg:fromJS(action.recommendImg),
        articleList:fromJS(action.articleList)
      });
    case "add_list":
      return state.merge({
        articleList:state.get('articleList').concat(fromJS(action.data)),
        page:action.page+1
      });
    case "showSrocll":
      return state.set('showSrocll',action.show)
    default:

  }
return state;
}
