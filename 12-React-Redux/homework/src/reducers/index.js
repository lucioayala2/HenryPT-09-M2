import { GET_MOVIES, ADD_MOVIE_FAVORITE, MOVIE_DETAIL } from '../actions'
const initialState = {
    moviesFavorites: [],
    moviesLoaded: [],
    movieDetail: {}
};

export function reducer (state = initialState, { type, payload }) {
    switch(type){
        case ADD_MOVIE_FAVORITE: {
            return {
              ...JSON.parse(JSON.stringify(state)), //copiamos el objeto creando uno totalmente nuevo
              moviesFavorites: [...JSON.parse(JSON.stringify(state.moviesFavorites)),payload]//en este caso payload es la peli que agregaria a favs
            };
        }
        case GET_MOVIES: {
          return {
            ...JSON.parse(JSON.stringify(state)),
            moviesLoaded: payload.Search,
          };
        }
        case MOVIE_DETAIL: {
          return {
            ...JSON.parse(JSON.stringify(state)),
            movieDetail: payload,
          };
        }
        default: return state;
    }
}