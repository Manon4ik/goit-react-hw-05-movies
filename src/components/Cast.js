
// https://api.themoviedb.org/3/movie/993710/credits?api_key=164eadb7baae3a4c5cb507a1aca52aae
import data from '../credits_993710.json'
console.log('cast: ',data.cast);

const secure_base_url = 'https://image.tmdb.org/t/p/w92'

export default function Cast() {
    return(
        <div>
            {data && data?.cast.length >0 ? (
                <ul>
                    {data.cast.map((cast)=>(
                        <li key={cast.id}>
                            <img src={secure_base_url+cast.profile_path} alt={cast.name} />
                            <p>{cast.name}</p>
                            <p>Character: {cast.character}</p>
                        </li>
                    ))}
                </ul>
            ):(
                <p>No information yet...</p>
            )}
        </div>
    )
}