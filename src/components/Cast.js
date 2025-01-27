
// https://api.themoviedb.org/3/movie/993710/credits?api_key=164eadb7baae3a4c5cb507a1aca52aae
//import data from '../credits_993710.json'
//console.log('cast: ',data.cast);

import { useParams } from "react-router-dom";

import { useState, useEffect } from "react"
import api from "api/api"

import Loader from 'components/Loader';

const secure_base_url = 'https://image.tmdb.org/t/p/w92'




export default function Cast() {

    const { movieId } = useParams()

    const { fetchCasts } = api

    const [casts, setCasts] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)

        const getCasts = async () => {
            try {
                const { data } = await fetchCasts(movieId)
                setCasts(data?.cast || [])
            } catch (error) {
                setError(error.message || "Something went wrong.")
            }finally{
                setIsLoading(false)
            }
        }

        getCasts()

    }, [movieId])

    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {isLoading ? <Loader /> :
            Array.isArray(casts) && casts.length > 0 ? (
                <ul>
                    {casts.map(({ id, profile_path, name, character }) => (
                        <li key={id}>
                            {profile_path &&
                                <img src={secure_base_url + profile_path} alt={name} loading="lazy" />
                            }
                            <p>{name}</p>
                            <p>Character: {character}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No information yet...</p>
            )}
        </div>
    )
}