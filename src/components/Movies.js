import React from 'react';
import styled from 'styled-components';

const Movie = styled.div`
  background: pink;
`

const Movies = ({id, title, year, summary}) => (
  <>
    <Movie id={id}>
      <p>{title}</p>
      <p>{year}</p>
      <p>{summary}</p>
    </Movie>
  </>
)

export default Movies;