import axios from "axios";
const BASE_URL = 'https://api.themoviedb.org/3/movie/'
const API_KEY = '?api_key=164eadb7baae3a4c5cb507a1aca52aae';

//?api_key=${API_KEY}`

//993710?api_key=164eadb7baae3a4c5cb507a1aca52aae
//420818?api_key=164eadb7baae3a4c5cb507a1aca52aae

//https://api.themoviedb.org/3/movie/{movie_id}
// https://api.themoviedb.org/3/movie/{movie_id}/reviews
//https://api.themoviedb.org/3/trending/movie/{time_window}

const fetchTranding = async () => {

    const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day${API_KEY}`)
    //console.log('reso: ',response);
    return response
}

const fetchMovie = async (movie_id = '') => {

    const response = await axios.get(`${BASE_URL + movie_id}${API_KEY}`)

    return response

}


const fetchReviews = async (movie_id = '') => {
    const response = await axios.get(`${BASE_URL + movie_id}/reviews${API_KEY}`)

    //console.log('resp: ', response?.data);

    return response
}
const fetchCasts = async (movie_id = '') => {
    const response = await axios.get(`${BASE_URL + movie_id}/credits${API_KEY}`)
    //console.log('resp: ', response?.data);

    return response
}

const fetchMovieSearch = async (query) => {

    const response = await axios.get(`https://api.themoviedb.org/3/search/movie${API_KEY}&query=${query}`)

    //console.log('resp:',response);
    return response
}


const api = { fetchTranding, fetchMovie, fetchReviews, fetchCasts, fetchMovieSearch }

export default api