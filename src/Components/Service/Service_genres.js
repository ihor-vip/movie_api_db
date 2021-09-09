import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2I0ZWRiMjliMGRlMWZiYmIyZWJjNmQ4Y2JlYWVlNSIsInN1YiI6IjYxMzA5M2VhMmNlZmMyMDA0M2E2NDk4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oXHthgtZSXGAGxeneamitOmDHiLOg-rqoq8OSpMkRvU',
    }
})
const getGenres = async () => await instance.get('/genre/movie/list');
export {getGenres}