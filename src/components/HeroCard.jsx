import React, { useState } from 'react';
import HeroModal from './HeroModal';

const HeroCard = ({ heroInfo, heroes, setHeroes }) => {
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);

	const removeHero = () => {
		setHeroes(heroes.filter((hero) => hero.id !== heroInfo.id));
	};

	return (
		<>
			<div>
				<p>{heroInfo.name}</p>
				<img src={heroInfo.image.url} />
				<p>Combat: {heroInfo.powerstats.combat === 'null' ? 'N/A' : heroInfo.powerstats.combat}</p>
				<p>
					Durability:{' '}
					{heroInfo.powerstats.durability === 'null' ? 'N/A' : heroInfo.powerstats.durability}
				</p>
				<p>
					Intelligence:{' '}
					{heroInfo.powerstats.intelligence === 'null' ? 'N/A' : heroInfo.powerstats.intelligence}
				</p>
				<p>Power: {heroInfo.powerstats.power === 'null' ? 'N/A' : heroInfo.powerstats.power}</p>
				<p>Speed: {heroInfo.powerstats.speed === 'null' ? 'N/A' : heroInfo.powerstats.speed}</p>
				<p>
					Strength: {heroInfo.powerstats.strength === 'null' ? 'N/A' : heroInfo.powerstats.strength}
				</p>
				<button onClick={removeHero}>Remove</button>
				<button onClick={handleShow}>Info</button>
			</div>
			<HeroModal heroInfo={heroInfo} setShow={setShow} show={show} />
		</>
	);
};

export default HeroCard;
