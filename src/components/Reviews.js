//import reviews from '../reviews_993710.json'
import React, { useState, useEffect } from "react";
import api from 'api/api'

//console.log('reviews:', typeof (reviews.results));


export default function Reviews() {

    const { fetchReview } = api

    //const  { data } = fetchReview(993710)

     //console.log('data:', data);
    

    //const { reviews } = data.data

    // const [reviews, setReviews] = useState([])

    // useEffect(() =>{

    //     const fetchReview = async () =>{
    //         try {
    //             const data = await api.fetchReview(993710)

    //             //console.log('data: ', data);
    //             setReviews(data.results)
                
    //         } catch (error) {
    //             console.log(error);                
    //         } finally {

    //         }
    //     }

    //     fetchReview()

    //     //console.log('data:',data);
        

    // } , [])

    // console.log(reviews)

    return (

        

        <div>
            {/* {reviews?.results && reviews.results.length > 0 ? (
                <ul>
                    {reviews.results.map((review) => (
                        <li key={review.id}>
                            <p><b>Author: {review.author}</b></p>
                            <p>{review.content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>We don't have any reviews for this movie yet.</p>
            )} */}
        </div>
    )
}