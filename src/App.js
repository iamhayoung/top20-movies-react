import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Movie from './components/Movie'
import axios from 'axios';

class App extends React.Component {
  state = {
    movieList: []
  }

  componentDidMount() {
    console.log("componentdidmount!");
    this.loadMovies();
  }

  loadMovies = () => {
    axios
      .get("https://yts.mx/api/v2/list_movies.json")
      .then((result) => {
        console.log(result.data.data.movies);
      })
      .catch(error => {
        console.error(error);
      })
  };

  render() {
    console.log('render')
    const {movieList} = this.state
    return (
      <>
        <GlobalStyle />
        <Movie hoge={movieList} />
      </>
    )
  }
}

export default App;
