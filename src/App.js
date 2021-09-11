import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './component/about';
import Signin from './component/sigin';
import Signup from './component/signup';
import Profile from './component/account/profile';
import Contact from './component/contact';
import Category from './component/category';
import ForgotPassword from './component/forgot';
import Detail from './component/detail';
import Live from './component/live';
import Catalog from './component/catalog';
import PageNotFound from './component/page';
import Pricing from './component/pricing';
import Interview from './component/interview';
import Privacy from './component/privacy';
import Home from './component/home';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact={true}>
					<Home />
				</Route>

				<Route path='/about'>
					<About />
				</Route>
				<Route path='/profile'>
					<Profile />
				</Route>
				<Route path='/contact'>
					<Contact />
				</Route>
				<Route path='/category'>
					<Category />
				</Route>
				<Route path='/forgotpassword'>
					<ForgotPassword />
				</Route>
				<Route path='/detail'>
					<Detail />
				</Route>
				<Route path='/live/stream'>
					<Live />
				</Route>
				<Route path='/catalog'>
					<Catalog />
				</Route>
				<Route path='/interview'>
					<Interview />
				</Route>

				<Route path='/movies/pricing'>
					<Pricing />
				</Route>

				<Route path='/privacy'>
					<Privacy />
				</Route>

				<Route path='/signin'>
					<Signin />
				</Route>
				<Route path='/signup'>
					<Signup />
				</Route>
				<Route>
					<PageNotFound />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
