import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const TeamStats = ({ heroes }) => {
	const [stats, setStats] = useState({
		powerstats: {
			intelligence: 0,
			strength: 0,
			speed: 0,
			durability: 0,
			power: 0,
			combat: 0,
		},
		averages: {
			height: 0,
			weight: 0,
		},
	});
	const [teamCategory, setTeamCategory] = useState('');

	const getStats = (teamArray) => {
		const totalIntelligence = teamArray.reduce(
			(total, hero) =>
				!isNaN(hero.powerstats.intelligence)
					? total + parseInt(hero.powerstats.intelligence)
					: total,
			0,
		);
		const totalStrength = teamArray.reduce(
			(total, hero) =>
				!isNaN(hero.powerstats.strength) ? total + parseInt(hero.powerstats.strength) : total,
			0,
		);
		const totalSpeed = teamArray.reduce(
			(total, hero) =>
				!isNaN(hero.powerstats.speed) ? total + parseInt(hero.powerstats.speed) : total,
			0,
		);
		const totalDurability = teamArray.reduce(
			(total, hero) =>
				!isNaN(hero.powerstats.durability) ? total + parseInt(hero.powerstats.durability) : total,
			0,
		);
		const totalPower = teamArray.reduce(
			(total, hero) =>
				!isNaN(hero.powerstats.power) ? total + parseInt(hero.powerstats.power) : total,
			0,
		);
		const totalCombat = teamArray.reduce(
			(total, hero) =>
				!isNaN(hero.powerstats.combat) ? total + parseInt(hero.powerstats.combat) : total,
			0,
		);
		const averageHeight = teamArray
			.reduce((total, hero) => total + parseInt(hero.appearance.height[1]) / teamArray.length, 0)
			.toFixed(2);
		const averageWeight = teamArray
			.reduce((total, hero) => total + parseInt(hero.appearance.weight[1]) / teamArray.length, 0)
			.toFixed(2);

		return {
			powerstats: {
				intelligence: totalIntelligence,
				strength: totalStrength,
				speed: totalSpeed,
				durability: totalDurability,
				power: totalPower,
				combat: totalCombat,
			},
			averages: {
				height: averageHeight,
				weight: averageWeight,
			},
		};
	};

	const getTeamCategory = (statsObject) => {
		const biggerStat = Object.keys(statsObject.powerstats).reduce((a, b) =>
			statsObject.powerstats[a] > statsObject.powerstats[b] ? a : b,
		);

		return statsObject.powerstats[biggerStat] === 0 ? '' : biggerStat;
	};

	useEffect(() => {
		const calculatedStats = getStats(heroes);
		const calculatedCategory = getTeamCategory(calculatedStats);

		setStats(calculatedStats);
		setTeamCategory(calculatedCategory);
	}, [heroes]);

	return (
		<Container className="my-4">
			<h4 className="text-capitalize">Team Category: {teamCategory ? teamCategory : 'N/A'}</h4>
			<h4>Team Stats:</h4>
			<Row className="text-center" md={6} xs={3}>
				<Col className="my-2">
					<div className="border">
						<p className="fs-6 bg-dark text-white my-0">Intelligence</p>
						<p className="fs-3 fw-bold my-0"> {stats.powerstats.intelligence}</p>
					</div>
				</Col>
				<Col className="my-2">
					<div className="border">
						<p className="fs-6 bg-dark text-white my-0">Strength</p>
						<p className="fs-3 fw-bold my-0">{stats.powerstats.strength}</p>
					</div>
				</Col>
				<Col className="my-2">
					<div className="border">
						<p className="fs-6 bg-dark text-white my-0">Speed</p>
						<p className="fs-3 fw-bold my-0">{stats.powerstats.speed}</p>
					</div>
				</Col>
				<Col className="my-2">
					<div className="border">
						<p className="fs-6 bg-dark text-white my-0">Durability</p>
						<p className="fs-3 fw-bold my-0">{stats.powerstats.durability}</p>
					</div>
				</Col>
				<Col className="my-2">
					<div className="border">
						<p className="fs-6 bg-dark text-white my-0">Power</p>
						<p className="fs-3 fw-bold my-0">{stats.powerstats.power}</p>
					</div>
				</Col>
				<Col className="my-2">
					<div className="border">
						<p className="fs-6 bg-dark text-white my-0">Combat</p>
						<p className="fs-3 fw-bold my-0">{stats.powerstats.combat}</p>
					</div>
				</Col>
				<Col className="my-2">
					<div className="border">
						<p className="fs-6 bg-dark text-white my-0">Avg. Height</p>
						<p className="fs-3 fw-bold my-0">{stats.averages.height} cm</p>
					</div>
				</Col>
				<Col className="my-2">
					<div className="border">
						<p className="fs-6 bg-dark text-white my-0">Avg. Weight</p>
						<p className="fs-3 fw-bold my-0">{stats.averages.weight} Kg</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default TeamStats;
