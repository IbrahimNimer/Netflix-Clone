import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './ModalMovie.css'
function ModalMovie({ showModal, handleModalClose, selectedMovie, comment, setComment }) {
    const handleSaveToFavorites = async () => {
        try {
            // Send a POST request to the addMovie endpoint with the data from the modal
            await axios.post('http://localhost:3000/addMovies', {
                original_title: selectedMovie.title,
                release_date: selectedMovie.release_date,
                poster_path: selectedMovie.image,
                overview: selectedMovie.overview,
                comment: comment
            });
            // Close the modal after saving to favorites
            handleModalClose();
        } catch (error) {
            console.error('Error saving movie to favorites:', error);
            // Handle error here
        }
    };
    return (
        <Modal show={showModal} onHide={handleModalClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add to Favorites MovieList</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>{selectedMovie && selectedMovie.title}</h5>
                {selectedMovie && <img src={`https://image.tmdb.org/t/p/w500${selectedMovie.image}`} alt={selectedMovie.title} style={{ maxWidth: '100%' }} />}
                <textarea
                    className="form-control mt-3"
                    rows="3"
                    placeholder="Add your comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                ></textarea>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleModalClose}>Close</Button>
                <Button variant="primary" onClick={handleSaveToFavorites}>Save changes</Button>
            </Modal.Footer>
        </Modal>
    )
}
export default ModalMovie;






