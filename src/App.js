import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import styled from 'styled-components';
import Movie from './components/Movie'
import axios from 'axios';

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 100vh;
  padding: 50px;
  background: #fef9ef;
`

const Loading = styled.div`
  font-weight: bold;
`

const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 500px);
  grid-gap: 100px;
`

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
      <Container>
        {loading ? (
          <Loading>Loading...</Loading>
          ) : (
          <MovieList>
            {movieList.map(movie => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  image={movie.medium_cover_image}
                  year={movie.year}
                  genres={movie.genres}
                  summary={movie.summary}
                />
              )
            })}
          </MovieList>
        )}
      </Container>
      </>
    )
  }
}

export default App;
