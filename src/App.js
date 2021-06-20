import React from "react"
import Header from "./components/Header/Header"
import Home from "./components/Home"
//styles
import { GlobalStyle } from "./GlobalStyle"

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  )
}

export default App
