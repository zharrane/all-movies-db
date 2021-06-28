import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
// Config
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from "../config"

//Components
import { Spinner } from "./Spinner"
import HeaderNav from "./HeaderNav"
//Hook
import { useMovieFetch } from "../hooks/useMovieFetch"
import { useParams } from "react-router-dom"
// Image
import NO_IMAGE from "../images/no_image.jpg"
import Thumb from "./Thumb"
import GridCard from "./GridCard"

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
const Director = styled.div`
  width: 150px;
  height: 200px;
  .director-link {
    margin: 0 auto;
    font-weight: bold;
    font-size: 1.3rem;
    text-decoration: none;
    color: var(--darkGrey);
    :hover {
      opacity: 0.8;
    }
  }
`
const DirectorImg = styled.img`
  width: 130px;
  max-width: 150px;
  height: 180px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  animation: animateThumb 0.5s;

  :hover {
    opacity: 0.8;
  }
  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const Movie = () => {
  const movieId = useParams()
  const { state, loading, error } = useMovieFetch(movieId)
  console.log(state)
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
      <GridCard header="Directors">
        {loading ? (
          <Spinner />
        ) : (
          state.movieDirectors.map((director) => {
            return (
              <Director>
                <DirectorImg
                  src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${director.profile_path}`}
                  alt="director-thumb"
                />
                <Link
                  className="director-link"
                  key={director.id}
                  to={`/${director.name}`}
                >
                  {director.name}
                </Link>
              </Director>
            )
          })
        )}
      </GridCard>
    </>
  )
}

export default Movie
