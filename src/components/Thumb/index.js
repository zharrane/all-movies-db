import React from "react"
import { Image } from "./Thumb.style"
const Thumb = ({ image, movieId, clickable }) => {
  return (
    <div>
      <Image src={image} alt="movie-thumb" />
    </div>
  )
}

export default Thumb
