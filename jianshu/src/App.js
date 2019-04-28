import React, { Component } from 'react';
import Haeder from './common/header/index';
import { GlobalStyled } from './style.js';
import { GlobaIcon } from './statics/iconfont/iconfont';
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter,Route } from 'react-router-dom';
import  Home  from './pages/home';
import  Detail  from './pages/detail/loadable';
import Login from './pages/login';
import Bh3d from './pages/br3d';
import Wirter from './pages/wirter';

class App extends Component {
	render(){
		return (
			<div>
			<GlobalStyled />
			<GlobaIcon />
      <Provider store={store}>
			<BrowserRouter>
			<Haeder />
			<Route path='/bh3d' exact component={Bh3d} />
			<Route path='/' exact component={Home}/>
			<Route path='/wirter' exact component={Wirter}/>
			<Route path='/detail/:id' exact component={Detail}/>
			<Route path='/login' exact component={Login} />
			</BrowserRouter>
			</Provider>
  		</div>
			);
	}
}
export default App;
