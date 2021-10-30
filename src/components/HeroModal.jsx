import React from 'react';
import { Modal, Image, Row, Col } from 'react-bootstrap';

const HeroModal = ({ heroInfo, show, setShow }) => {
	const handleClose = () => setShow(false);

	return (
		<Modal centered scrollable show={show} size={'lg'} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>{heroInfo.name}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Row lg={2} xs={1}>
					<Col className="mb-3">
						<Image className="w-100 h-auto" src={heroInfo.image.url} />
					</Col>
					<Col>
						<p className="fw-bold">
							Full Name: <span className="fw-normal">{heroInfo.biography['full-name']}</span>
						</p>
						<p className="fw-bold">
							Aliases: <span className="fw-normal">{heroInfo.biography.aliases.join(', ')}</span>
						</p>
						<p className="fw-bold">
							Weight: <span className="fw-normal">{heroInfo.appearance.weight[1]}</span>
						</p>
						<p className="fw-bold ">
							Height: <span className="fw-normal">{heroInfo.appearance.height[1]}</span>
						</p>
						<p className="fw-bold ">
							Eye Color:{' '}
							<span className="fw-normal text-capitalize">{heroInfo.appearance['eye-color']}</span>
						</p>
						<p className="fw-bold ">
							Hair Color:{' '}
							<span className="fw-normal text-capitalize">{heroInfo.appearance['hair-color']}</span>
						</p>
						<p className="fw-bold ">
							Occupation: <span className="fw-normal">{heroInfo.work.occupation}</span>
						</p>
					</Col>
				</Row>
			</Modal.Body>
		</Modal>
	);
};

export default HeroModal;
