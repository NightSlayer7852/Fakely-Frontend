// App.jsx

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Auth from './pages/Auth.jsx'; // Sign In/Sign Up tabs
import Review from './pages/Review.jsx'; // Protected content
import Home from './pages/Home.jsx'; // Example protected content
import About from './pages/About.jsx'; // Example protected content
import Contact from './pages/Contact.jsx'; // Example protected content
import Profile from './pages/Profile.jsx'; // Protected Profile page
import Law from './pages/Law.jsx'; // Protected Law Enforcement Support page
import Reputation from './pages/Reputation.jsx'; // Protected Corporate Reputation Management page

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
              <Route path="/profile" element={<Profile />} />
              <Route path="/review" element={<Review />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/law" element={<Law />} />
              <Route path="/reputation" element={<Reputation />} />
            </Route>

            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
  )
}
export default App;