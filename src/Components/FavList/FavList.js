
import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button, Form} from 'react-bootstrap';
import './FavList.css'; 

function FavList() {
    useEffect(() => {
        sendReq();
    }, []);

    const [movies, setMovies] = useState([]);
    const [updatedComment, setUpdatedComment] = useState(""); // State for the updated comment

    const sendReq = async () => {
        const apiUrl=process.env.REACT_APP_API_URL
        const serverURL = `${apiUrl}/allMovies`;
        const res = await fetch(serverURL);
        const jsonRes = await res.json();
        setMovies(jsonRes.map(movie => ({ ...movie, showMore: false }))); 
    }

    const handleUpdate = (movieId) => {
        const movieToUpdate = movies.find(movie => movie.id === movieId);
        if (!movieToUpdate) return;

        console.log(`Updating movie: ${movieToUpdate.original_title}`);
        const updatedMovie = { ...movieToUpdate, comment: updatedComment }; 
        const apiUrl=process.env.REACT_APP_API_URL
        fetch(`${apiUrl}/editMovie/${movieId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedMovie)
        }).then(response => {
            if (response.ok) {
              
                setMovies(prevMovies => prevMovies.map(m => (m.id === movieId ? updatedMovie : m)));
            }
        });
    };
    const handleDelete = async (movieId) => {
        const apiUrl=process.env.REACT_APP_API_URL
        const serverURL = `${apiUrl}/DELETE/${movieId}`;
        const res = await fetch(serverURL, { method: "DELETE" })

        if (res.ok) {
            setMovies(prevMovies => prevMovies.filter(movie => movie.id !== movieId));
        }
    };
    const toggleShowMore = (movieId) => {
        setMovies(prevMovies =>
            prevMovies.map(movie =>
                movie.id === movieId ? { ...movie, showMore: !movie.showMore } : movie
            )
        );
    };
    return (
        <div className="favlist-container">
    <h2 className="favlist-title">Favorite Movies</h2>
    <Row className="favlist-row">
        {movies.map(movie => (
            <Col key={movie.id} className="favlist-card">
                <Card className="favlist-card-item" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                    <Card.Body>
                        <Card.Title className="card-title">{movie.original_title}</Card.Title>
                        <Card.Text className="card-text">
                            {movie.showMore ? movie.overview : `${movie.overview.substring(0, 100)}...`}
                            <Button variant="link" className="btn-link" onClick={() => toggleShowMore(movie.id)}>
                                {movie.showMore ? 'See Less' : 'See More'}
                            </Button>
                        </Card.Text>
                        <div className="comment-box">
                            <p className="comment-text">Comment: {movie.comment}</p>
                            <Form.Control
                                type="text"
                                placeholder="Enter new comment"
                                value={updatedComment}
                                onChange={(e) => setUpdatedComment(e.target.value)}
                            />
                        </div>
                        <Button variant="primary" className="btn-primary" onClick={() => handleUpdate(movie.id)}>Update</Button>
                        <Button variant="danger" className="btn-primary" onClick={() => handleDelete(movie.id)}>Delete</Button>
                    </Card.Body>
                </Card>
            </Col>
        ))}
    </Row>
</div>
    
    );
    
    
    
}

export default FavList;
