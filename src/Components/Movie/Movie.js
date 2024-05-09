import React, { useState } from 'react';
import ModalMovie from '../ModalMovie/ModalMovie.js';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './Movie.css';

function Movie(props) {
    const [showModal, setShowModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [comment, setComment] = useState('');
    const [showFullOverview, setShowFullOverview] = useState(false);

    const handleModalClose = () => {
        setShowModal(false);
        setSelectedMovie(null);
        setComment('');
    };

    const handleAddToFavorites = (movie) => {
        setSelectedMovie(movie);
        setShowModal(true);
    };

    const toggleOverview = () => {
        setShowFullOverview(!showFullOverview);
    };

    return (
        <>
            <Col key={props.id} className="movie-card">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.image}`} />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {showFullOverview ? props.overview : `${props.overview.substring(0, 100)}...`}
                            {showFullOverview ? (
                                <Button variant="link" onClick={toggleOverview}>See Less</Button>
                            ) : (
                                <Button variant="link" onClick={toggleOverview}>See More</Button>
                            )}
                        </Card.Text>
                        <Button variant="primary" onClick={() => handleAddToFavorites(props)}>Add to Favorite List</Button>
                    </Card.Body>
                </Card>
            </Col>
            <ModalMovie
                showModal={showModal}
                handleModalClose={handleModalClose}
                selectedMovie={selectedMovie}
                comment={comment}
                setComment={setComment}
            />
        </>
    );
}

export default Movie;






