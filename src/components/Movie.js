export default function Movie( {movie} ) {

    console.log('movie2:', movie);
    

    const {poster_path, original_title, title, overview, genres, release_date} = movie

    console.log('title:', title);

    

    const secure_base_url = 'https://image.tmdb.org/t/p/w300'
    const reliase_year = release_date?.split("-")[0];

    return (
        <section className="movie">
            <div className="movieImage">
                <img src={secure_base_url + poster_path} alt={original_title} />
            </div>
            <div className="movieInfo">
                <h1>{title} ({reliase_year})</h1>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>
                    {genres.map((genre, index) => (
                        <span key={index}>{genre.name} </span>
                    ))}
                </p>
            </div>
        </section>
    )

}