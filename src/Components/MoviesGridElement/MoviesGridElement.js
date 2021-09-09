import './MoviesGridElement.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getMovies} from "../Service/Service_movie";
import {Link} from "react-router-dom";
import {Pagination} from "@material-ui/lab";
import MovieRating from "../Ratings/Ratings";
import {GenresIds} from "../Genre/Genre";


export function MoviesDiscription(){
    let state = useSelector(state => state)
    let dispatch = useDispatch()
    let movies = state.movie
    let pages = state.pages
    let totalPages = state.totalPages



    useEffect( ()=>{
        getMovies(pages).then(value => {
            dispatch(
                {type: 'FETCH_MOVIES', payload:(value.data)})
            dispatch(
                {type:'TOTAL_PAGES',payload:(value.data.total_pages)})
        })
        // eslint-disable-next-line
    },[pages])


    let handleChange = (event,value) => {
        dispatch( {type:'GET_PAGES',payload:(value)})
        ;}

    return(

       <div>

           <div className={'movies_grid'}>
               {

                   movies && movies.map(value=>
                        <Link to={`/about/${value.id}`}>
                            <div  key={value.id} className={'media'}>
                               <img className={'poster'} src={`https://image.tmdb.org/t/p/w300${value.poster_path}`} alt="movie"/>
                               <span>rated:</span>
                               <MovieRating item={value.vote_average}/>
                               <GenresIds genre_ids={value.genre_ids} key={value.id}/>
                            </div>
                        </Link>
                   )
               }

           </div>

           <div className={'pagination'}>
               <Pagination count={totalPages}  color="primary" onChange={handleChange} hideNextButton hidePrevButton/>
           </div>
       </div>
    )}