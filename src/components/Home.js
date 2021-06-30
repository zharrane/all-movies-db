import React from "react"

//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config"
//Components
import HeroImage from "./HeroImage"
import GridCard from "./GridCard"
import Thumb from "./Thumb"
import { Spinner } from "./Spinner"
import SearchBar from "./SearchBar"
import Button from "./Button"
//hook
import { useMovieFetch } from "../hooks/useHomeFetch"
//Img
import NoImage from "../images/no_image.jpg"

const Home = () => {
  const { state, loading, error, searchTerm, setIsLoadingMore, setSearchTerm } =
    useMovieFetch()
  if (error) return <div>Something went wrong...</div>
  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      <GridCard header={!searchTerm ? "Popular Movies" : "Search Result"}>
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable={true}
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
            movieTitle={movie.title}
          ></Thumb>
        ))}
      </GridCard>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button
          text="Load more"
          callback={() => {
            setIsLoadingMore(true)
          }}
        />
      )}
    </>
  )
}
export default Home
