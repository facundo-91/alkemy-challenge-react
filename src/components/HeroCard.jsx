import React, { useState } from 'react';
import { Button, Col, Image, ProgressBar } from 'react-bootstrap';
import HeroModal from './HeroModal';

const HeroCard = ({ heroInfo, heroes, setHeroes }) => {
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);

	const removeHero = () => {
		setHeroes(heroes.filter((hero) => hero.id !== heroInfo.id));
	};

	return (
		<>
			<Col className="my-2">
				<div className="border border-secundary d-flex flex-column h-100">
					<div className="position-relative h-100">
						<Image
							fluid
							className="h-100"
							src={heroInfo.image.url}
							style={{ objectFit: 'cover' }}
						/>
						<p className="position-absolute bottom-0 m-0 py-2 bg-dark bg-opacity-75 text-white text-center w-100">
							{heroInfo.name}
						</p>
					</div>
					<div className="mx-3 my-2">
						<p className="m-0">Combat:</p>
						<div className="progress mb-2" style={{ height: '12px' }}>
							<div
								aria-valuemax="100"
								aria-valuemin="0"
								aria-valuenow={
									heroInfo.powerstats.combat === 'null' ? 0 : heroInfo.powerstats.combat
								}
								className="progress-bar"
								role="progress-bar"
								style={{
									minWidth: '17%',
									width:
										heroInfo.powerstats.combat === 'null' ? '0%' : `${heroInfo.powerstats.combat}%`,
								}}>
								{heroInfo.powerstats.combat === 'null' ? 'N/A' : heroInfo.powerstats.combat}
							</div>
						</div>
						<p className="m-0">Durability:</p>
						<div className="progress mb-2" style={{ height: '12px' }}>
							<div
								aria-valuemax="100"
								aria-valuemin="0"
								aria-valuenow={
									heroInfo.powerstats.durability === 'null' ? 0 : heroInfo.powerstats.durability
								}
								className="progress-bar"
								role="progress-bar"
								style={{
									minWidth: '17%',
									width:
										heroInfo.powerstats.durability === 'null'
											? '0%'
											: `${heroInfo.powerstats.durability}%`,
								}}>
								{heroInfo.powerstats.durability === 'null' ? 'N/A' : heroInfo.powerstats.durability}
							</div>
						</div>
						<p className="m-0">Intelligence:</p>
						<div className="progress mb-2" style={{ height: '12px' }}>
							<div
								aria-valuemax="100"
								aria-valuemin="0"
								aria-valuenow={
									heroInfo.powerstats.intelligence === 'null' ? 0 : heroInfo.powerstats.intelligence
								}
								className="progress-bar"
								role="progress-bar"
								style={{
									minWidth: '17%',
									width:
										heroInfo.powerstats.intelligence === 'null'
											? '0%'
											: `${heroInfo.powerstats.intelligence}%`,
								}}>
								{heroInfo.powerstats.intelligence === 'null'
									? 'N/A'
									: heroInfo.powerstats.intelligence}
							</div>
						</div>
						<p className="m-0">Power:</p>
						<div className="progress mb-2" style={{ height: '12px' }}>
							<div
								aria-valuemax="100"
								aria-valuemin="0"
								aria-valuenow={heroInfo.powerstats.power === 'null' ? 0 : heroInfo.powerstats.power}
								className="progress-bar"
								role="progress-bar"
								style={{
									minWidth: '17%',
									width:
										heroInfo.powerstats.power === 'null' ? '0%' : `${heroInfo.powerstats.power}%`,
								}}>
								{heroInfo.powerstats.power === 'null' ? 'N/A' : heroInfo.powerstats.power}
							</div>
						</div>
						<p className="m-0">Speed:</p>
						<div className="progress mb-2" style={{ height: '12px' }}>
							<div
								aria-valuemax="100"
								aria-valuemin="0"
								aria-valuenow={heroInfo.powerstats.speed === 'null' ? 0 : heroInfo.powerstats.speed}
								className="progress-bar"
								role="progress-bar"
								style={{
									minWidth: '17%',
									width:
										heroInfo.powerstats.speed === 'null' ? '0%' : `${heroInfo.powerstats.speed}%`,
								}}>
								{heroInfo.powerstats.speed === 'null' ? 'N/A' : heroInfo.powerstats.speed}
							</div>
						</div>
						<p className="m-0">Strength:</p>
						<div className="progress mb-2" style={{ height: '12px' }}>
							<div
								aria-valuemax="100"
								aria-valuemin="0"
								aria-valuenow={
									heroInfo.powerstats.strength === 'null' ? 0 : heroInfo.powerstats.strength
								}
								className="progress-bar"
								role="progress-bar"
								style={{
									minWidth: '17%',
									width:
										heroInfo.powerstats.strength === 'null'
											? '0%'
											: `${heroInfo.powerstats.strength}%`,
								}}>
								{heroInfo.powerstats.strength === 'null' ? 'N/A' : heroInfo.powerstats.strength}
							</div>
						</div>
					</div>
					<div className="d-flex flex-column mb-3 mx-3">
						<Button
							className="mb-2 d-flex justify-content-center align-items-center"
							variant="dark"
							onClick={handleShow}>
							<Image
								className="h-100 mx-1"
								src="https://icongr.am/material/information-outline.svg?size=24&color=ffffff"
							/>
							Details
						</Button>
						<Button
							className="d-flex justify-content-center align-items-center"
							variant="danger"
							onClick={removeHero}>
							<Image
								className="h-100 mx-1"
								src="https://icongr.am/material/trash-can-outline.svg?size=24&color=ffffff"
							/>
							Remove
						</Button>
					</div>
				</div>
			</Col>
			<HeroModal heroInfo={heroInfo} setShow={setShow} show={show} />
		</>
	);
};

export default HeroCard;
