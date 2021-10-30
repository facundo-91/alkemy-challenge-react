import React from 'react';
import { Row } from 'react-bootstrap';
import HeroCard from './HeroCard';

const HeroesContainer = ({ heroes, setHeroes }) => {
	return (
		<div className="my-4">
			<h4>Heroes ({heroes.length}/6):</h4>
			<Row md={3} xs={2}>
				{heroes.map((hero) => (
					<HeroCard key={hero.id} heroInfo={hero} heroes={heroes} setHeroes={setHeroes} />
				))}
			</Row>
		</div>
	);
};

export default HeroesContainer;
