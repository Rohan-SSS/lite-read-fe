import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import { Navbar } from './Components';
import { StoryProvider } from './Components/StoryProvider';
import {
  Browse,
  Genre,
  Home,
  Novel,
  Read
} from "./Pages";

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <StoryProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/genre" element={<Genre />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/:title" element={<Novel />} />
            <Route path="/:title/:volume" element={<Read />} />
          </Routes>
        </StoryProvider>
      </div>
    </div>
  )
}

export default App;