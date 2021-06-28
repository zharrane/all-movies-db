import React from "react"
import { Wrapper, Content, Text } from "./HeroImage.style"
const HeroImage = ({ image, title, text, children }) => {
  return (
    <Wrapper image={image}>
      <Content>
        <Text>
          <h1>{title}</h1>
          <p>{text}</p>
          {children}
        </Text>
      </Content>
    </Wrapper>
  )
}

export default HeroImage
