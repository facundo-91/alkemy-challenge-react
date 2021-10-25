import React, { useState } from 'react';

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
			<TeamStats heroes={heroes} />
			<SearchResults
				heroes={heroes}
				searchError={searchError}
				searchResult={searchResult}
				setHeroes={setHeroes}
			/>
			<HeroesContainer heroes={heroes} setHeroes={setHeroes} />
		</div>
	);
};

export default Home;
