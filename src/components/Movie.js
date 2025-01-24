export default function Movie({ movie }) {

    //console.log(movie);
    const {poster_path, original_title, vote_average, title, overview, genres, release_date} = movie

    const secure_base_url = 'https://image.tmdb.org/t/p/w300'
    const release_year = release_date?.split("-")[0];

    return (
        <section className="movie">
            <div className="movieImage">
                <img src={secure_base_url + poster_path} alt={original_title} />
            </div>
            <div className="movieInfo">
                <h1>{title || "Unknown Title"} ({release_year || "N/A"})</h1>
                <p>User score: {vote_average * 10}%</p>
                <h2>Overview</h2>
                {overview && <p>{overview}</p>}
                <h3>Genres</h3>
                <p>
                    {Array.isArray(genres) && genres.length > 0 && (genres.map((genre, index) => (
                        <span key={index}>{genre.name} </span>
                    )))}
                </p>
            </div>
        </section>
    )

}