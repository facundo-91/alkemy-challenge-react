import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import HeroesContainer from '../components/HeroesContainer';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import TeamStats from '../components/TeamStats';

const Home = () => {
	const [heroes, setHeroes] = useState([]);
	const [searchResult, setSearchResult] = useState([]);
	const [searchError, setSearchError] = useState('');

	return (
		<div className="app">
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
