import React from 'react';
import { connect } from 'react-redux';
import { getDetail, setMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

  constructor(props) {
    super(props)

    this.state= {
      detail: {}
    }
  }

//hacemos que muestre los detalles con un estado local, en lugar de acceder al estado global
    componentDidMount(){
      fetch(`http://www.omdbapi.com/?apikey=3762a923&i=${this.props.match.params.id}`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({detail: json})
      });
    }

    render() {
        return (
            <div className="movie-detail">
                <h1>Detalle de la pelicula</h1>
                <h2>{this.state.detail?.Title || ''}</h2>
                <img src={this.state.detail?.Poster} alt='' />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
  movies: state.moviesLoaded,
  detail: state.movieDetail
})

const mapDispatchToProps = (dispatch) => ({
  setMovie: (movie) => dispatch(setMovieDetail(movie)),
  getMovie: (imdbID) => dispatch(getDetail(imdbID)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Movie);