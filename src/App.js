import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import styled from 'styled-components';
import Movie from './components/Movie'
import axios from 'axios';

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 50px;
  background: #fef9ef;

  @media only screen and (max-width: 767px) {
    padding: 20px;
  }
`

const Loading = styled.div`
  font-weight: bold;
`

const Title = styled.h1`
  margin-bottom: 60px;
  font-size: 120px;
  letter-spacing: 7px;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: white;
  text-shadow: 8px 8px #cd4631, 17px 17px #000000;
  text-align: center;
  line-height: 1.3;
  font-style: italic;

  @media only screen and (max-width: 1200px) {
    font-size: 83px;
  }

  @media only screen and (max-width: 767px) {
    margin-bottom: 35px;
    font-size: 47px;
  }
`

const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 500px);
  grid-gap: 100px;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }

  @media only screen and (max-width: 767px) {
    grid-gap: 45px;
  }
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
          <>
            <Title>Top 20 Movies</Title>
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
          </>
        )}
      </Container>
      </>
    )
  }
}

export default App;
