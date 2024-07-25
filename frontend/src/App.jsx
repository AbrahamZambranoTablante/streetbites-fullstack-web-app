import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import './App.css'
import Home from './Pages/Home';
import Index from './Pages/Index';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import New from './Pages/New';
import Edit from './Pages/Edit';
import Show from './Pages/Show';
import About from './Pages/About';
import Error from './Pages/Error';

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/vendors/:selection/:cuisine" element={<Index/>}/>
          <Route path="/vendors/:selection" element={<Index/>}/>
          <Route path="/vendors/location/:borough" element={<Index/>}/>
          <Route path="/vendors/location/:borough/:neighborhood" element={<Index/>}/>
          <Route path="/vendors/new" element={<New/>}/>
          <Route path="/vendors/:id/edit" element={<Edit/>}/>
          <Route path="/vendors/:id" element={<Show/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
