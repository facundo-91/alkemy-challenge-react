import React from 'react';
import { Modal } from 'react-bootstrap';

const HeroModal = ({ heroInfo, show, setShow }) => {
	const handleClose = () => setShow(false);

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>{heroInfo.name}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>Full Name: {heroInfo.biography['full-name']}</p>
				<p>Aliases: {heroInfo.biography.aliases.join(', ')}</p>
				<p>Weight: {heroInfo.appearance.weight[1]}</p>
				<p>Height: {heroInfo.appearance.height[1]}</p>
				<p>Eye Color: {heroInfo.appearance['eye-color']}</p>
				<p>Hair Color: {heroInfo.appearance['hair-color']}</p>
				<p>Occupation: {heroInfo.work.occupation}</p>
			</Modal.Body>
		</Modal>
	);
};

export default HeroModal;
