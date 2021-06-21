import { useState, useEffect } from "react"
import API from "../API"

//Custom Hook
export const useMovieFetch = ({ movieId }) => {
  const [state, setState] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(false)

        const movie = await API.fetchMovie(movieId)
        const credits = await API.fetchCredits(movieId)
        const movieDirectors = credits.crew.filter(
          (member) => member.job === "Director"
        )
        setState({
          ...movie,
          actors: credits.cast,
          movieDirectors,
        })

        setLoading(false)
      } catch (error) {
        setLoading(false)
        seterror(true)
      }
    }
  }, [movieId])
  return { state, loading, error }
}
