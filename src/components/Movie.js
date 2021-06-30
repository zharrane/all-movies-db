import React from "react"
import styled from "styled-components"
// Config
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from "../config"

//Components
import { Spinner } from "./Spinner"
import HeaderNav from "./HeaderNav"
import Person from "./Person/Person"
//Hook
import { useMovieFetch } from "../hooks/useMovieFetch"
import { useParams } from "react-router-dom"
// Image
import NO_IMAGE from "../images/no_image.jpg"
import Thumb from "./Thumb"

const Wrapper = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 45%,
      rgba(0, 0, 0, 0.8) 80%
    ),
    url(${({ image }) => image}), var(--darkGrey);
  opacity: 0.8;
  background-size: 100%, cover;
  background-position: center;
  position: relative;
  max-width: var(--maxWdith);
  width: 100%;
  z-index: 0;
  height: 550px;
  padding: 30px 100px;
`
const Content = styled.div`
  display: flex;
  height: 500px;
  width: 300px;
  margin: 20px 0;
`
const Participant = styled.div`
  padding: 10px 20px;
  max-width: var(--maxWdith);
  width: 100%;
  height: 200px;
  h1 {
    color: var(--medGrey);
  }
`

const Movie = () => {
  const movieId = useParams()
  const { state, loading, error } = useMovieFetch(movieId)
  const directorsCount = loading ? 0 : state.movieDirectors.length
  console.log(state)
  if (error) return <div>Something went wrong...</div>
  return (
    <>
      <HeaderNav movieTitle={state.original_title} />
      <Wrapper
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.backdrop_path}`}
      >
        <Content>
          <Thumb
            image={
              state.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + state.poster_path
                : NO_IMAGE
            }
            movieId={movieId}
          />
        </Content>
      </Wrapper>
      {loading ? (
        <Spinner />
      ) : (
        <Participant>
          <h1> {directorsCount > 1 ? "Movie Directors" : "Movie Director"}</h1>
          <Person persons={state.movieDirectors} />
        </Participant>
      )}
    </>
  )
}

export default Movie
