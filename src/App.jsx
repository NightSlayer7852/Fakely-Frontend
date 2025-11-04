import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute.jsx'
import Auth from './pages/Auth.jsx'
import Home from './pages/Home.jsx'
import Review from './pages/Review.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Auth />} />
        <Route element={<PrivateRoute />}>

          <Route path="/home" element={<Home />} />
          <Route path="/review" element={<Review />} />

        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App