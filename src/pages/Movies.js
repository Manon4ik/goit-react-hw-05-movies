import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import api from "api/api";
import Loading from "components/Loader";
import SearchForm from "components/SearchForm";
import MoviesList from "components/MoviesList";

export default function Movies() {

    const { fetchMovieSearch } = api

    const [searchParams] = useSearchParams();

    

    const [result, setResult] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const navigation = useNavigate();

    //console.log('nav: ', navigation);
    
    const location = useLocation()
    console.log('location movies: ', location);

    
    const request = searchParams.get('query');
    console.log('request on Movies: ', request);
    



    useEffect (()=> {

        if(request === null){
            return
        }

        const getMovieSearch = async () => {
            setIsLoading(true)
            try {
                const { data } = await fetchMovieSearch(request)
                setResult(data?.results || [])
            } catch (error) {
                setError(error.message || "Something went wrong.")
            } finally {
                setIsLoading(false)
            }
        }

        getMovieSearch()
        
    }, [request, fetchMovieSearch] )

    const addRequest = newRequest => {
        if (request !== newRequest) {
          navigation({ search: `query=${newRequest}` });
        }
      };


    if (error) return <p>Error: {error}</p>;

    return (
        <main>
            <h1>Movies</h1>
            <SearchForm onGetRequest={addRequest} />
            {isLoading ? <Loading /> :
            <MoviesList movies={result} />
            }
        </main>
    )
}