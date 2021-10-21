import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
	const [heroes, setHeroes] = useState([]);
	const [searchResult, setSearchResult] = useState([]);
	const [searchInputValue, setSearchInputValue] = useState('');

	useEffect(() => {
		const handleSearch = async () => {
			const trimedInput = searchInputValue.trim();

			if (trimedInput.length > 0) {
				const request = axios.get(
					`https://superheroapi.com/api/${import.meta.env.VITE_ACCESS_TOKEN}/search/${trimedInput}`,
				);
				const response = await request;

				setSearchResult(response.data.results);
			} else {
				setSearchResult([]);
			}
		};
		const timeOutId = setTimeout(() => handleSearch(), 500);

		return () => {
			clearTimeout(timeOutId);
		};
	}, [searchInputValue, setSearchResult]);

	return (
		<div>
			<form>
				<input placeholder="Search" onChange={(e) => setSearchInputValue(e.target.value)} />
			</form>
			<div>
				Results:
				{searchResult.map((result) => {
					return (
						<div key={result.id}>
							<p>{result.name}</p>
							<button onClick={() => setHeroes(heroes.concat(result))}>Add</button>
							<button>Remove</button>
						</div>
					);
				})}
			</div>
			<br />
			<div>
				Heroes:
				{heroes.map((hero) => (
					<div key={hero.id}>{hero.name}</div>
				))}
			</div>
		</div>
	);
};

export default Home;
