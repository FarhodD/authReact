import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Greeting from "./pages/Greeting"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Greeting />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
