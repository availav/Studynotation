// import "./App.css";
// import Navbar from "./components/Navbar"
// import Home from "./pages/Home"
// import { Route, Routes } from "react-router-dom";
// import Signup from  "./pages/Signup"
// import Dashboard from  "./pages/Dashboard"
// import Login from  "./pages/Login"
// import { useState } from "react";


// function App() {

//   const[isLoggedIn,setIsLoggedin]= useState(false);
//   return (
//     <div>
//       <Navbar  isLoggedIn={isLoggedIn} setIsLoggedin={setIsLoggedin}/>
//       <Routes>
//         <Route path="/" element ={<Home/>} />
//         <Route path="/Login" element ={<Login setIsLoggedin={setIsLoggedin}  />} />
//         <Route path="/Signup" element ={<Signup setIsLoggedin={setIsLoggedin} />} />
//         <Route path="/Dashboard" element ={<Dashboard/>} />


//       </Routes>
//     </div>                       
//   )
// }

// export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import {useState } from 'react'
import PrivateRoute from "./components/PrivateRoute";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>

        <Route path="/" element= {<Home isLoggedIn={isLoggedIn}/>} />
        <Route path="/login" element = {<Login  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element = {
          <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard/>
          </PrivateRoute>
       
        } />

      </Routes>

    </div>
    )
}

export default App;
