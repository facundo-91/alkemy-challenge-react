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
		<div className="my-4">
			<Col className="my-3">
				<h4 className="mb-3">Your Team:</h4>
				<div className="border border-secundary d-flex flex-column h-100">
					<div className="mx-3 my-3">
						<h4 className="mb-3 text-capitalize">
							Type:{' '}
							<span className="text-danger fst-italic fw-bold">
								{teamCategory ? teamCategory : 'N/A'}
							</span>
						</h4>
						<h4>Stats:</h4>
						<p className="m-0">Combat:</p>
						<div className="progress mb-2">
							<div
								aria-valuemax="100"
								aria-valuemin="0"
								aria-valuenow={stats.powerstats.combat === 'null' ? 0 : stats.powerstats.combat}
								className="progress-bar"
								role="progress-bar"
								style={{
									minWidth: '17%',
									width:
										stats.powerstats.combat === 'null' || heroes.length === 0
											? '0%'
											: `${stats.powerstats.combat / heroes.length}%`,
								}}>
								{stats.powerstats.combat === 'null' ? 'N/A' : stats.powerstats.combat}
							</div>
						</div>
						<p className="m-0">Durability:</p>
						<div className="progress mb-2">
							<div
								aria-valuemax="100"
								aria-valuemin="0"
								aria-valuenow={
									stats.powerstats.durability === 'null' ? 0 : stats.powerstats.durability
								}
								className="progress-bar"
								role="progress-bar"
								style={{
									minWidth: '17%',
									width:
										stats.powerstats.durability === 'null' || heroes.length === 0
											? '0%'
											: `${stats.powerstats.durability / heroes.length}%`,
								}}>
								{stats.powerstats.durability === 'null' ? 'N/A' : stats.powerstats.durability}
							</div>
						</div>
						<p className="m-0">Intelligence:</p>
						<div className="progress mb-2">
							<div
								aria-valuemax="100"
								aria-valuemin="0"
								aria-valuenow={
									stats.powerstats.intelligence === 'null' ? 0 : stats.powerstats.intelligence
								}
								className="progress-bar"
								role="progress-bar"
								style={{
									minWidth: '17%',
									width:
										stats.powerstats.intelligence === 'null' || heroes.length === 0
											? '0%'
											: `${stats.powerstats.intelligence / heroes.length}%`,
								}}>
								{stats.powerstats.intelligence === 'null' ? 'N/A' : stats.powerstats.intelligence}
							</div>
						</div>
						<p className="m-0">Power:</p>
						<div className="progress mb-2">
							<div
								aria-valuemax="100"
								aria-valuemin="0"
								aria-valuenow={stats.powerstats.power === 'null' ? 0 : stats.powerstats.power}
								className="progress-bar"
								role="progress-bar"
								style={{
									minWidth: '17%',
									width:
										stats.powerstats.power === 'null' || heroes.length === 0
											? '0%'
											: `${stats.powerstats.power / heroes.length}%`,
								}}>
								{stats.powerstats.power === 'null' ? 'N/A' : stats.powerstats.power}
							</div>
						</div>
						<p className="m-0">Speed:</p>
						<div className="progress mb-2">
							<div
								aria-valuemax="100"
								aria-valuemin="0"
								aria-valuenow={stats.powerstats.speed === 'null' ? 0 : stats.powerstats.speed}
								className="progress-bar"
								role="progress-bar"
								style={{
									minWidth: '17%',
									width:
										stats.powerstats.speed === 'null' || heroes.length === 0
											? '0%'
											: `${stats.powerstats.speed / heroes.length}%`,
								}}>
								{stats.powerstats.speed === 'null' ? 'N/A' : stats.powerstats.speed}
							</div>
						</div>
						<p className="m-0">Strength:</p>
						<div className="progress mb-2">
							<div
								aria-valuemax="100"
								aria-valuemin="0"
								aria-valuenow={stats.powerstats.strength === 'null' ? 0 : stats.powerstats.strength}
								className="progress-bar"
								role="progress-bar"
								style={{
									minWidth: '17%',
									width:
										stats.powerstats.strength === 'null' || heroes.length === 0
											? '0%'
											: `${stats.powerstats.strength / heroes.length}%`,
								}}>
								{stats.powerstats.strength === 'null' ? 'N/A' : stats.powerstats.strength}
							</div>
						</div>
						<p className="m-0">Averages:</p>
						<Row>
							<Col className="text-center">
								<p className="fs-6 bg-dark text-white my-0">Height</p>
								<p className="fs-6 fw-bold my-0 border border-secundary">
									{stats.averages.height} cm
								</p>
							</Col>
							<Col className="text-center">
								<p className="fs-6 bg-dark text-white my-0">Weight</p>
								<p className="fs-6 fw-bold my-0 border border-secundary">
									{stats.averages.weight} Kg
								</p>
							</Col>
						</Row>
					</div>
				</div>
			</Col>
		</div>
	);
};

export default TeamStats;
