//import reviews from '../reviews_993710.json'
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from 'api/api'

import Loader from 'components/Loader';

export default function Reviews() {

    const { fetchReviews } = api
    const { movieId } = useParams()

    const [reviews, setReviews] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    //console.log('reviews:', reviews);

    useEffect(() =>{

        setIsLoading(true)
        
        const getReviews = async () => {
            try {
                const {data} = await fetchReviews(movieId)
                //console.log('x:',data);
                setReviews(data?.results)
                
            } catch (error) {
                setError(error.message || "Something went wrong.")            
            }finally{
                setIsLoading(false)
            }
        }

        getReviews()

        //console.log('reviews 2:', reviews);
        

    } , [movieId, fetchReviews])

    // console.log(reviews)

    if(error) return <p>Error: {error}</p>;

    return (

        <div>
            {isLoading ? 
            <Loader /> :
            Array.isArray(reviews) && reviews.length > 0 ? (
                <ul>
                    {reviews.map(({id, author, content}) => (
                        <li key={id}>
                            <p><b>Author: {author}</b></p>
                            <p>{content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>We don't have any reviews for this movie yet.</p>
            )}
        </div>
    )
}