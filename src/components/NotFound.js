import React from "react"
import HeaderNav from "./HeaderNav"
import styled from "styled-components"
import NotFoundImg from "../images/not_found.svg"

const NotFoundImage = styled.img`
width: 100%;
justify-content: center;
margin: 50px auto;
align-items: center;
display: flex;
`

const NotFound = () => {

  return <div>
    <HeaderNav movieTitle="Error"/>
    <NotFoundImage src={NotFoundImg} alt="Not found"/>
  </div>
}

export default NotFound
