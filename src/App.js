import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Movies from './components/Movies'
import axios from 'axios';

class App extends React.Component {
  state = {
    loading: true,
    movieList: []
  }

  componentDidMount() {
    console.log("componentdidmount!");
    this.loadMovies();
  }

  loadMovies = async () => {
    await axios
      .get("https://yts.mx/api/v2/list_movies.json")
      .then(result => {
        this.setState({
          loading: false,
          movieList: result.data.data.movies
        });
      })
      .catch(error => {
        console.error(error);
        this.setState({
          loading: true
        })
      })
  };

  render() {
    console.log('render')
    const { movieList, loading } = this.state;
    return (
      <>
        <GlobalStyle />
        {loading ? (
          <div>Loading...</div>
        ) : (
          movieList.map(movie => {
            return (
              <Movies
                id={movie.id}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
              />
            )
          })
        )}
      </>
    )
  }
}

export default App;
