import SinglePage from "./Components/SinglePage"
import React from 'react'
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import LoginPage from "./Components/LoginPage"
import SignupPage from "./Components/SignupPage"
function App() {

  return (
    <>

<Router>
      <Routes>
        <Route path="/" element={<SinglePage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>

    </>
  )
}

export default App
