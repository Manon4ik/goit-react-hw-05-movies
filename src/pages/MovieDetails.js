//import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import movie from '../movie_993710.json'
import api from 'api/api';

import GoBack from "components/GoBack";
import Movie from 'components/Movie';
import AdditionalInfo from "components/AdditionalInfo";

export default function MovieDetails() {

    //const location = useLocation();
    //console.log('location Movie Single: ',location);

    const { movieId } = useParams()
    const { fetchMovie } = api

    const [movie, setMovie] = useState(null)

    useEffect(() => {

        const getMovie = async () => {
            try {
                const { data } = await fetchMovie(movieId)
                console.log('data:', data);
                setMovie(data)

                console.log('movie:', movie);


            } catch (error) {

            }
        }

        getMovie()

    }, [movieId, movie, fetchMovie])

    //console.log('movie:', typeof(movie));

    return (
        <main>
            <GoBack />
            <Movie movie={movie} />
            <AdditionalInfo />
        </main>
    )
}