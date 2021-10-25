import React, { useState, useEffect } from 'react';

const SearchResultCard = ({ heroInfo, heroes, setHeroes }) => {
	const [teamAlignments, setTeamAlignments] = useState({ goods: 0, bads: 0 });

	const getTeamAlignments = (teamArray) => {
		let counterGoods = 0;
		let counterBads = 0;

		teamArray.map((hero) => {
			hero.biography.alignment === 'bad' ? counterBads++ : counterGoods++;
		});

		return { goods: counterGoods, bads: counterBads };
	};

	const addHero = (heroAlignment) => {
		if (heroes.length < 6) {
			if (
				((heroAlignment === 'good' || heroAlignment === 'neutral') && teamAlignments.goods < 3) ||
				(heroAlignment === 'bad' && teamAlignments.bads < 3)
			) {
				setHeroes(heroes.concat(heroInfo));
			} else {
				if (teamAlignments.goods === 3) window.alert('Too many goods heroes');
				if (teamAlignments.bads === 3) window.alert('Too many bads heroes');
			}
		} else {
			window.alert('Team Completed');
		}
	};

	const removeHero = () => {
		setHeroes(heroes.filter((hero) => hero.id !== heroInfo.id));
	};

	useEffect(() => {
		const calculatedAlignments = getTeamAlignments(heroes);

		setTeamAlignments(calculatedAlignments);
	}, [heroes]);

	return (
		<div>
			<p>{heroInfo.name}</p>
			<img src={heroInfo.image.url} />
			{heroes.some((hero) => hero.id === heroInfo.id) ? (
				<button onClick={() => removeHero()}>Remove</button>
			) : (
				<button onClick={() => addHero(heroInfo.biography.alignment)}>Add</button>
			)}
		</div>
	);
};

export default SearchResultCard;
