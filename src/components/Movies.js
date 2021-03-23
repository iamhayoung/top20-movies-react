import React from 'react';
import styled from 'styled-components';

const Movie = styled.div`
  flex: 1;
`

const Title = styled.h1`

`

const Movies = ({id, title, image, year, genres, summary}) => (
  <>
    <Movie id={id}>
      <Title>{title}</Title>
      <img src={image} alt={title} />
      <p>{year}</p>
      <ul>
        {genres.map((genre, index) => {
          return <li key={index}>{genre}</li>
        })}
      </ul>
      <p>{summary}</p>
    </Movie>
  </>
)

export default Movies;