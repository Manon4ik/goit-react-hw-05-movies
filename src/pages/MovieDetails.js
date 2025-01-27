import { useEffect, useState } from 'react';
import { useParams, useLocation, useSearchParams } from 'react-router-dom';
import api from 'api/api';

import GoBack from "components/GoBack";
import Movie from 'components/Movie';
import AdditionalInfo from "components/AdditionalInfo";
import Loader from 'components/Loader';

export default function MovieDetails() {

    const { movieId } = useParams()
    const { fetchMovie } = api

    const [movie, setMovie] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    //const location = useLocation()
    //console.log('location on single: ', location);

    //const [searchParams] = useSearchParams();
    //const request = searchParams.get('request');
    //console.log('request on Movies: ', request);

    useEffect(() => {

        setIsLoading(true)

        const getMovie = async () => {
            try {
                const { data } = await fetchMovie(movieId)
                setMovie(data || [])
            } catch (error) {
                setError(error.message || "Something went wrong.")
            } finally {
                setIsLoading(false)
            }
        }

        getMovie()

    }, [movieId])

    if (error) return <p>Error: {error}</p>;

    if (!movie) {
        return
    }

    return (
        <main>
            {isLoading ?
                <Loader />
                :
                <>
                    <GoBack />
                    <Movie movie={movie} />
                    <AdditionalInfo />
                </>
            }
        </main>
    )
}