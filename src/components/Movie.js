import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const MovieItem = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;

  @media only screen and (max-width: 767px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
  }
`

const Img = styled.img`
  max-width: 190px;
  width: 100%;
  margin-right: 30px;

  @media only screen and (max-width: 767px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`

const MovieData = styled.div``

const MovieTitle = styled.h2`
  margin-bottom: 5px;
  font-weight: 600;
  color: #333;
  line-height: 1.3;

  @media only screen and (max-width: 767px) {
    text-align: center;
  }
`

const Year = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 400;
  color: #615555;

  @media only screen and (max-width: 767px) {
    margin-bottom: 0;
    text-align: center;
  }
`

const Genres = styled.ul`
  margin-bottom: 5px;

  @media only screen and (max-width: 767px) {
    margin-bottom: 20px;
    text-align: center;
  }
`

const Genre = styled.li`
  display: inline-block;
  font-size: 14px;
  color: #9c9c9c;
  font-weight: 300;

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

  @media only screen and (max-width: 1200px) {
    -webkit-line-clamp: 6;
  }
`

const Movie = ({id, title, image, year, genres, summary}) => (
  <>
    <MovieItem id={id}>
      <Img src={image} alt={title} />
      <MovieData>
        <MovieTitle>{title}</MovieTitle>
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