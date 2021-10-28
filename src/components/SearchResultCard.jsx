import React, { useState, useEffect } from 'react';
import { Col, Image } from 'react-bootstrap';

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

	return heroes.some((hero) => hero.id === heroInfo.id) ? (
		<Col className="pb-3">
			<div
				className={`d-flex flex-column h-100 border-top border-5 rounded shadow ${
					heroInfo.biography.alignment === 'bad' ? 'border-danger' : 'border-success'
				}`}
				role="button"
				onClick={() => removeHero()}>
				<div className="position-relative h-100">
					<Image
						fluid
						className="h-100 mb-2"
						src={heroInfo.image.url}
						style={{ objectFit: 'cover' }}
					/>
					<div className="position-absolute bg-dark bg-opacity-75 bottom-0 w-100">
						<p className="text-center text-light my-auto py-1">{heroInfo.name}</p>
					</div>
				</div>
				<div
					className="rounded-bottom bg-danger text-white text-center border border-danger"
					style={{ padding: '.375rem .75rem' }}>
					Remove
				</div>
			</div>
		</Col>
	) : (
		<Col className="pb-3">
			<div
				className={`d-flex flex-column h-100 border-top border-5 rounded shadow ${
					heroInfo.biography.alignment === 'bad' ? 'border-danger' : 'border-success'
				}`}
				role="button"
				onClick={() => addHero(heroInfo.biography.alignment)}>
				<div className="position-relative h-100">
					<Image
						fluid
						className="h-100 mb-2"
						src={heroInfo.image.url}
						style={{ objectFit: 'cover' }}
					/>
					<div className="position-absolute bg-dark bg-opacity-75 bottom-0 w-100">
						<p className="text-center text-light my-auto py-1">{heroInfo.name}</p>
					</div>
				</div>
				<div
					className="rounded-bottom bg-dark text-white text-center border border-dark"
					style={{ padding: '.375rem .75rem' }}>
					Add to Team
				</div>
			</div>
		</Col>
	);
};

export default SearchResultCard;
