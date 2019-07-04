import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/elements/Header/Header';
import NotFound from './components/elements/NotFound/NotFound';
import Movie from './components/Movie/Movie';
import Home from './components/Home/Home';

function App() {
	return (
		<BrowserRouter>
			<>
				<Header />
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/:movieId" component={Movie} exact />
					<Route component={NotFound} />
				</Switch>
			</>
		</BrowserRouter>
	);
}

export default App;
