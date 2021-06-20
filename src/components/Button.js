import styled from "styled-components"
import React from "react"

//Styles
const Wrapper = styled.button`
  width: 25%;
  min-width: 200px;
  height: 60px;
  display: block;
  background: var(--darkGrey);
  color: var(--white);
  border: 0px;
  border-radius: 30px;
  font-size: var(--fontBig);
  margin: 20px auto;
  transition: all 0.3s;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`

const Button = ({ text, callback }) => {
  return (
    <Wrapper type="button" onClick={callback}>
      {text}
    </Wrapper>
  )
}

export default Button
