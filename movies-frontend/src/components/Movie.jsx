import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {

    const [movie, setMovie] = useState({});
    let { id } = useParams();

    useEffect(()=>{
        let myMovie = {
            id: 1,
            title: "Highlander",
            release_date: "1986-03-07",
            runtime: 116,
            mpaa_rating: "R",
            description: "Some desc",
        }

        setMovie(myMovie);
    }, [id])

    return(
        <div className="text-center">
            <h2>Movie: {movie.title}</h2>
            <hr />
            <p>Releasing on: {movie.release_date}</p>
            <p>Runtime: {movie.runtime}</p>
            <p>Rating: {movie.mpaa_rating}</p>
            <p>Description: {movie.description}</p>
        </div>
    )
}
export default Movie;