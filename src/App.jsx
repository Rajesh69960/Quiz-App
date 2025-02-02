import React from "react"
import Home from "./components/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import QuizQuestion from "./components/QuizQuestion"
import Result from "./components/Result"
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<QuizQuestion />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
