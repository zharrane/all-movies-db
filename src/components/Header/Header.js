import React from "react"
import { Link } from "react-router-dom"
import HeaderLogo from "../../images/header-logo.svg"
import TMDBLogo from "../../images/tmdb_logo.svg"
import { Wrapper, Content, LogoImg, TMDBLogoImg, Logo } from "./Header.styles"

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <Logo>
          <LogoImg src={HeaderLogo} alt="rmdb-logo" />
          <h1>Zharrane MDB</h1>
        </Logo>
      </Link>
      <a href="https://www.themoviedb.org/" alt="Movie data base">
      <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" /></a>
    </Content>
  </Wrapper>
)

export default Header
