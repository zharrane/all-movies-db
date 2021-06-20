import React from "react"
import HeaderLogo from "../../images/header-logo.svg"
import TMDBLogo from "../../images/tmdb_logo.svg"
import { Wrapper, Content, LogoImg, TMDBLogoImg, Logo } from "./Header.styles"

const Header = () => (
  <Wrapper>
    <Content>
      <Logo>
        <LogoImg src={HeaderLogo} alt="rmdb-logo" />
        <h1>Zharrane MDB</h1>
      </Logo>

      <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
    </Content>
  </Wrapper>
)

export default Header
