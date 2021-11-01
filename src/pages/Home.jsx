import React, { useState } from 'react';
import { Col, Container, Row, Navbar, Button } from 'react-bootstrap';

import HeroesContainer from '../components/HeroesContainer';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import TeamStats from '../components/TeamStats';

const Home = ({ setIsAuthenticated }) => {
	const [heroes, setHeroes] = useState([]);
	const [searchResult, setSearchResult] = useState([]);
	const [searchError, setSearchError] = useState('');

	const logout = () => {
		localStorage.removeItem('token');
		setIsAuthenticated(false);
	};

	return (
		<div className="app">
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#">Alkemy React Challenge</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						<Navbar.Text>
							<Button size="sm" variant="danger" onClick={() => logout()}>
								Log Out
							</Button>
						</Navbar.Text>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<SearchBar setSearchError={setSearchError} setSearchResult={setSearchResult} />
			<SearchResults
				heroes={heroes}
				searchError={searchError}
				searchResult={searchResult}
				setHeroes={setHeroes}
			/>
			<Container>
				<Row>
					<Col lg={3} xs={12}>
						<TeamStats heroes={heroes} />
					</Col>
					<Col lg={9} xs={12}>
						<HeroesContainer heroes={heroes} setHeroes={setHeroes} />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Home;
