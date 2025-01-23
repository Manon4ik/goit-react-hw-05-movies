import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'api/api';

import GoBack from "components/GoBack";
import Movie from 'components/Movie';
import AdditionalInfo from "components/AdditionalInfo";

export default function MovieDetails() {

    const { movieId } = useParams()
    const { fetchMovie } = api

    const [movie, setMovie] = useState(null)

    useEffect(() => {

        const getMovie = async () => {
            try {
                const { data } = await fetchMovie(movieId)
                setMovie(data)
            } catch (error) {

            }finally{

            }
        }

        getMovie()

    }, [movieId, fetchMovie])

    if(!movie){
        return
    }

    return (
        <main>
            <GoBack />
            <Movie movie={movie} />
            <AdditionalInfo />
        </main>
    )
}