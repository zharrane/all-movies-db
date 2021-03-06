import React from "react"
//Style
import {
  Participants,
  Participant,
  Content,
  Wrapper,
  MovieInfos,
  MovieCover,
} from "./Movie.style"
// Config
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from "../../config"
import { calcTime } from "../../helpers"
//Components
import { Spinner } from "../Spinner"
import HeaderNav from "../HeaderNav"
import Person from "../Person/Person"
//ProgressBar

//Hook
import { useMovieFetch } from "../../hooks/useMovieFetch"
import { useParams } from "react-router-dom"
// Image
import NO_IMAGE from "../../images/no_image.jpg"
import SideInforBar from "../SideInforBar"

const Movie = () => {
  const movieId = useParams()
  const { state, loading, error } = useMovieFetch(movieId)
  let release_date = new Date(state.release_date)
  let year = release_date.getFullYear()
  let rating = Math.floor(state.vote_average * 10)
  window.scrollTo(0, 0)
  console.log(state)
  if (error) return <div>Something went wrong...</div>
  return (
    <>
      <HeaderNav movieTitle={state.original_title} />

      <Wrapper
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.backdrop_path}`}
      >
        <div className="bg-styling">
          <Content>
            <MovieCover
              src={
                state.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + state.poster_path
                  : NO_IMAGE
              }
              alt={`cover of ${state.title} movie`}
              movieId={movieId}
            />
            <MovieInfos>
              <div className="title-year">
                <h2>{state.original_title} </h2> {"  "} <span> ({year})</span>
              </div>
              <div className="year-gener-time">
                <span>{state.release_date}</span>
                {loading ? (
                  <div></div>
                ) : (
                  <span>
                    <span> • </span>
                    {state.genres.map((item, index) =>
                      index === state.genres.length - 1 ? (
                        <span key={state.id}>{item.name} </span>
                      ) : (
                        <span key={state.id}>{item.name} , </span>
                      )
                    )}
                  </span>
                )}
                <span>
                  <span> • </span>
                  {calcTime(state.runtime)}
                </span>
              </div>

              <div>
                <h3 className="tagline"> {state.tagline}</h3>
                <h3>Synopsis</h3>
                <p>{state.overview}</p>
                <ol>
                  {loading ? (
                    <div> Loading... </div>
                  ) : (
                    state.movieDirectors.map((director) => {
                      return (
                        <li key={director.id}>
                          <div className="director-card">
                            <div>
                              <p
                                className="director-name"
                                key={director.id + 2021}
                              >
                                {director.original_name}
                              </p>
                              <p
                                className="director-job"
                                key={director.id + 2022}
                              >
                                {director.job}
                              </p>
                            </div>
                          </div>
                        </li>
                      )
                    })
                  )}
                </ol>
              </div>
            </MovieInfos>
          </Content>
        </div>
      </Wrapper>
      {loading ? (
        <Spinner />
      ) : (
        <Participants>
          <Participant>
            <h1> Top Billed Cast</h1>
            <Person persons={state.actors} />
          </Participant>
          <SideInforBar />
        </Participants>
      )}
    </>
  )
}

export default Movie
