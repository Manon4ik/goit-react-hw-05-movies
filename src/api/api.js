import axios from "axios";
const BASE_URL = 'https://api.themoviedb.org/3/movie/'
const API_KEY = '?api_key=164eadb7baae3a4c5cb507a1aca52aae';

//?api_key=${API_KEY}`

//993710?api_key=164eadb7baae3a4c5cb507a1aca52aae
//420818?api_key=164eadb7baae3a4c5cb507a1aca52aae

// https://api.themoviedb.org/3/movie/{movie_id}/reviews

const fetchReviews = async (movie_id = '') => {
    const response = await axios.get(`${BASE_URL + movie_id}/reviews${API_KEY}`)

    console.log('resp: ', response?.data);


    //return response
}
const fetchCasts = async (movie_id = '') => {
    const response = await axios.get(`${BASE_URL + movie_id}/credits${API_KEY}`)
    console.log('resp: ', response?.data);

    //return response
}


const api = { fetchReviews, fetchCasts }

export default api