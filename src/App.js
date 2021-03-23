import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Movie from './components/Movie'
import axios from 'axios';

class App extends React.Component {
  state = {
    loading: false,
    movieList: []
  }

  componentDidMount() {
    console.log("componentdidmount!");
    this.loadMovies();
  }

  loadMovies = () => {
    axios
      .get("https://yts.mx/api/v2/list_movies.json")
      .then(result => {
        this.setState({
          loading: true,
          movieList: result.data.data.movies
        });
      })
      .catch(error => {
        console.error(error);
        this.setState({
          loading: false
        })
      })
  };

  render() {
    console.log('render')
    const { movieList } = this.state;
    console.log(movieList)
    return (
      <>
        <GlobalStyle />
        <Movie />
      </>
    )
  }
}

export default App;
