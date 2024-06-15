import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Testimonials from './components/Testimonials';
import Navbar from './components/Navbar';
import Library from './components/Library';
import LandingPage from './components/LandingPage';
import Channel from './components/Channel';
import Chat from './components/Chat';
import Chatbot from './components/Chatbot';
import TestimonialsCorousel from './components/TestimonialCorousel';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/library" element={<Library />} />
        <Route path="/channel" element={<Channel />} />
        <Route path = "/chat" element = {<Chat />} />
        <Route path = "/test" element = {<TestimonialsCorousel />} />

        <Route path = "/chatbot" element = {<Chatbot />} />


        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </div>
  );
}

export default App;
