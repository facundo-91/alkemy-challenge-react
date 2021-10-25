import React from 'react';
import HeroCard from './HeroCard';

const HeroesContainer = ({ heroes, setHeroes }) => {
	return (
		<div>
			<h4>Heroes ({heroes.length}/6):</h4>
			{heroes.map((hero) => (
				<HeroCard key={hero.id} heroInfo={hero} heroes={heroes} setHeroes={setHeroes} />
			))}
		</div>
	);
};

export default HeroesContainer;
