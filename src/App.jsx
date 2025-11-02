import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute.jsx'
import Auth from './pages/Auth.jsx'
import Home from './pages/Home.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route element={<PrivateRoute />} >
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
