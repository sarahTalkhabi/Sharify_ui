import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import LoginPage from './components/LoginPage';
import Mybutton from './components/test';
import ProfilePage from './components/Profile';
import SignupPage from './components/Signup';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path='/' element={<LoginPage />}/>
        <Route path='/profile' element={<ProfilePage />}/>
        <Route path="/signup" element={<SignupPage />} />
       
      </Routes>
    </Router>
    
  )
}
