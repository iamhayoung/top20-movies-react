import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Movies from './components/Movies'
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
        <Movies
          id={movieList.id}
          title={movieList.title}
          year={movieList.year}
          summary={movieList.summary}
        />
      </>
    )
  }
}

export default App;
