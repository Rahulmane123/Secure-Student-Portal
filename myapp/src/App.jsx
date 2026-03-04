import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import StudentsData from "./components/StudentsData"
import Registration from "./components/Registration"



function App() {
   


  return (
    <>
  
    
       <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/students" element={<StudentsData />} />
          <Route path="/login" element={<Login />} />
            
        </Routes>

       
    </>
  )
}

export default App
