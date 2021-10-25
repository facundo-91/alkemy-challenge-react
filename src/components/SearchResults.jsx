import React from 'react';
import SearchResultCard from './SearchResultCard';

const SearchResults = ({ heroes, setHeroes, searchError, searchResult }) => {
	if (searchResult.length > 0) {
		return (
			<div>
				<h4>Results:</h4>
				{searchResult.map((result) => (
					<SearchResultCard
						key={result.id}
						heroInfo={result}
						heroes={heroes}
						setHeroes={setHeroes}
					/>
				))}
			</div>
		);
	} else if (searchError.length > 0) {
		return <div>{searchError}</div>;
	} else return null;
};

export default SearchResults;
