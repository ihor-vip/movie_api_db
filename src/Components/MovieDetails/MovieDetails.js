import './MovieDetails.css'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";


function MovieDetails(props){
    let {match:{params: {id}}} = props
    let movie = useSelector(({movie})=> movie);
    const movieId = movie.filter(value => id.indexOf(value.id) !==-1)

    return(
        <div className={'wrap_posterPrewiev'}>
            {
                movieId.map(value => {
                    return(
                        <div key={value.id}>
                            <Link to={'/'} className={'link'}>
                                Back to Movies
                            </Link>
                            <div className={'poster'}>
                                <img src={`https://image.tmdb.org/t/p/w500${value.poster_path}`} alt="poster"/>
                            </div>
                            <span className={'title'}><b><h2>{value.title} ({(value.release_date).substring(0, 4)})</h2></b></span>
                            <span>{value.overview}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}
export {MovieDetails}