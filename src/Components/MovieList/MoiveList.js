import Movie from '../Movie/Movie.js'
import Row from 'react-bootstrap/Row';
import '../MovieList/MoiveList.css'; 

function MovieList(props) {
    return (
        <div className="movie-list-container"> 
            <h2>All Trending Movies</h2>
            <Row xs={1} md={3} className="g-4">
                {props.trendingArr.map((movie) => (
                    <Movie key={movie.id} id={movie.id} title={movie.title||movie.name} image={movie.poster_path} 
                    overview={movie.overview} release_date={movie.release_date} />
                ))}
            </Row>
        </div>
    );
}

export default MovieList;

