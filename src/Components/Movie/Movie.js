import {Route} from "react-router-dom";
import {MovieDetails} from "../MovieDetails/MovieDetails";

function Movie(props){
    let { match:{url}} = props
    return(
        <div className={'wrap_next_page'}>
            <Route path={`${url}/:id`} render={(props)=>{
                return <MovieDetails {...props}/>
            }
            }/>
        </div>
    )
}

export {Movie}