import styled from "styled-components"
import React from "react"
import { Link } from "react-router-dom"
const Wrapper = styled.div`
  background-color: #2f2e41;
  color: var(--white);
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Content = styled.div`
  text-transform: uppercase;
  display: flex;
  width: 100%;
  max-width: var (--maxWidth);
  padding: 0 20px;

  .home-link {
    text-decoration: none;
  }
  span {
    text-decoration: none;

    font-size: var (--fontMed);
    color: var(--white);
    padding-right: 10px;
    @media screen and (max-width: 720px) {
      font-size: var (--fontSmall);
    }
  }
`
const HeaderNav = ({ movieTitle }) => {
  return (
    <Wrapper>
      <Content>
        <Link className="home-link" to="/">
          <span>HOME</span>
        </Link>
        <span> {" | "} </span>
        <span>{movieTitle}</span>
      </Content>
    </Wrapper>
  )
}

export default HeaderNav
