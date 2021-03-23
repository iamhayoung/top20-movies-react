import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const MovieItem = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
`

const Img = styled.img`
  max-width: 190px;
  width: 100%;
  margin-right: 30px;
`

const MovieData = styled.div``

const Title = styled.h1`
  margin-bottom: 5px;
  font-weight: 600;
  color: #333;
  line-height: 1.3;
`

const Year = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 300;
  color: #615555;
`

const Genres = styled.ul`
  margin-bottom: 5px;
`

const Genre = styled.li`
  display: inline-block;
  font-size: 14px;
  color: #9c9c9c;

  &:after {
    content: '|';
    margin: 5px;
    color: #dadada;
  }

  &:last-child:after {
    display: none;
  }
`

const Summary = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
  font-size: 14px;
  color: #3a3636;
`

const Movie = ({id, title, image, year, genres, summary}) => (
  <>
    <MovieItem id={id}>
      <Img src={image} alt={title} />
      <MovieData>
        <Title>{title}</Title>
        <Year>{year}</Year>
        <Genres>
          {genres.map((genre, index) => {
            return <Genre key={index}>{genre}</Genre>
          })}
        </Genres>
        <Summary>{summary}</Summary>
      </MovieData>
    </MovieItem>
  </>
)

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired
}

export default Movie;