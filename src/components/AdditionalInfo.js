import { Link, Outlet } from "react-router-dom"
export default function AdditionalInfo() {

    return (
        <section>
            <h4>Additional information</h4>
            <ul>
                <li><Link to="cast">Cast</Link></li>
                <li><Link to="reviews">Reviews</Link></li>
            </ul>
            <Outlet />
        </section>
    )
}