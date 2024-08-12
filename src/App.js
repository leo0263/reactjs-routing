import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import VideoList from './components/VideoList.js';
import VideoPlayer from './components/VideoPlayer.js';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/videos" element={<PrivateRoute element={<VideoList />} />} />
        <Route path="/video/:id" element={<PrivateRoute element={<VideoPlayer />} />} />
      </Routes>
    </Router>
  );
}

export default App;
