import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SearchResultCard from './SearchResultCard';

const SearchResults = ({ heroes, setHeroes, searchError, searchResult }) => {
	if (searchResult.length > 0) {
		return (
			<Container>
				<h4>Search results: ({searchResult.length} items)</h4>
				<Row md={6} xs={3}>
					{searchResult.map((result) => (
						<SearchResultCard
							key={result.id}
							heroInfo={result}
							heroes={heroes}
							setHeroes={setHeroes}
						/>
					))}
				</Row>
			</Container>
		);
	} else if (searchError.length > 0) {
		return (
			<Container className="alert alert-danger text-capitalize text-center" role="alert">
				{searchError}
			</Container>
		);
	} else return null;
};

export default SearchResults;
