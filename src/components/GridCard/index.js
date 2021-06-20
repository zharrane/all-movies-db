import React from "react"
import { Wrapper, Content } from "./GridCard.style"
const GridCard = ({ header, children }) => {
  return (
    <Wrapper>
      <h1>{header}</h1>
      <Content>{children}</Content>
    </Wrapper>
  )
}

export default GridCard
