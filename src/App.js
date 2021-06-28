import React from "react"
//Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./components/Header/Header"
import Home from "./components/Home"
import Movie from "./components/Movie"
import NotFound from "./components/NotFound"
//styles
import { GlobalStyle } from "./GlobalStyle"

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Router>
  )
}

export default App
