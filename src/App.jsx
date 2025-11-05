// App.jsx

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Auth from './pages/Auth.jsx'; // Sign In/Sign Up tabs
import Review from './pages/Review.jsx'; // Protected content
import Home from './pages/Home.jsx'; // Example protected content

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>

          {/* Public Route: Authentication Landing Page */}
          <Route path="/" element={<Auth />} />

          {/* PROTECTED ROUTES */}
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/review" element={<Review />} />
          </Route>

          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
export default App;