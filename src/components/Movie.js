import React from 'react';
import styled from 'styled-components';

const Movies = styled.div`
  background: pink;
`

const Movie = ({name}) => (
  <>
    <Movies>{name}</Movies>
  </>
)

export default Movie;