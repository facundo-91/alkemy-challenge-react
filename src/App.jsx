import React, { useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PublicRoute from './pages/PublicRoute';
import PrivateRoute from './pages/PrivateRoute';
import './App.css';

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(() =>
		localStorage.getItem('token') !== null ? true : false,
	);

	return (
		<Router>
			<Switch>
				<PublicRoute exact isAuthenticated={isAuthenticated} path="/login">
					<Login setIsAuthenticated={setIsAuthenticated} />
				</PublicRoute>
				<PrivateRoute exact isAuthenticated={isAuthenticated} path="/">
					<Home setIsAuthenticated={setIsAuthenticated} />
				</PrivateRoute>
			</Switch>
		</Router>
	);
}

export default App;
