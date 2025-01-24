import { useState, useEffect } from "react";
//import { useLocation } from "react-router-dom";
import api from 'api/api';
import Loading from 'components/Loader';
import MoviesList from 'components/MoviesList';

export default function Home() {

    const { fetchTranding } = api

    const [result, setResult] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    //const location = useLocation()
    //console.log('location Home: ', location);

    fetchTranding()



    useEffect(() => {

        const getTending = async () => {

            setIsLoading(true)

            try {
                const { data } = await fetchTranding()
                setResult(data?.results || [])

            } catch (error) {
                setError(error.message || "Something went wrong.")
            } finally {
                setIsLoading(false)
            }
        }

        getTending()

    }, [])

    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Trending today</h1>
            {isLoading ? <Loading /> :
                <MoviesList movies={result} />
            }
        </div>
    )
}