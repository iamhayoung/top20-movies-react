import React from 'react';
import styled from 'styled-components';

const Movies = styled.div`
  background: pink;
`

const Movie = ({hoge}) => (
  <>
    <Movies>{hoge}</Movies>
  </>
)

export default Movie;