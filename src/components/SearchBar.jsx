import { useState, useEffect } from 'react';
import axios from 'axios';

const Search = ({ setSearchResult, setSearchError }) => {
	const [searchInputValue, setSearchInputValue] = useState('');

	useEffect(() => {
		const handleSearch = async () => {
			const trimedInput = searchInputValue.trim();

			if (trimedInput.length > 0) {
				const request = axios.get(
					`https://superheroapi.com/api/${import.meta.env.VITE_ACCESS_TOKEN}/search/${trimedInput}`,
				);
				const response = await request;

				if (response.data.response === 'success') {
					setSearchResult(response.data.results);
					setSearchError('');
				} else if (response.data.response === 'error') {
					setSearchResult([]);
					setSearchError(response.data.error);
				}
			} else {
				setSearchError('');
				setSearchResult([]);
			}
		};

		const timeOutId = setTimeout(() => handleSearch(), 500);

		return () => {
			clearTimeout(timeOutId);
		};
	}, [searchInputValue, setSearchResult]);

	return (
		<form>
			<input placeholder="Search" onChange={(e) => setSearchInputValue(e.target.value)} />
		</form>
	);
};

export default Search;
