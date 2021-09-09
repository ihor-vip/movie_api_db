import axios from "axios";

const getMovies = async (pages)  => await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=bcb4edb29b0de1fbbb2ebc6d8cbeaee5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pages}`)
export {getMovies}