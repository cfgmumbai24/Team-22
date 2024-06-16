import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'; // Ensure App.css contains necessary styles for positioning
import Testimonials from './Components/Testimonials';
import Navbar from './Components/Navbar';
import Library from './Components/Library';
import LandingPage from './Components/LandingPage';
import Channel from './Components/Channel';
import Chat from './Components/Chat';
import Chatbot from './Components/Chatbot';
import TestimonialsCorousel from './Components/TestimonialCorousel';
import Donor from './Components/Donor';
import Scholarships from './Components/Scholarships';
import CourseCategory from './Components/courses/CourseCategory';
import CourseDisplay from './Components/courses/CourseDisplay';
import Jobs from './Components/Jobs';
import Announcements from './Components/announcements/Announcements';
import LeaderBoardPage from './Components/LeaderboardPage';
import StudentRegistrationForm from './Components/signup/StudentRegistrationForm';
import MentorRegistrationForm from './Components/signup/MentorRegistrationForm';
function App() {
  const [category, setCategory] = useState('All'); // State for category selection

  // Function to initialize Google Translate
  useEffect(() => {
    const googleTranslateScript = document.createElement('script');
    googleTranslateScript.type = 'text/javascript';
    googleTranslateScript.innerHTML = `
      function googleTranslateElementInit() {
        new google.translate.TranslateElement({
          pageLanguage: 'en',  // Change this to your default page language
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
      }
    `;
    document.head.appendChild(googleTranslateScript);
  }, []);

  return (
    <div className="relative"> {/* Ensure the container has relative positioning */}
          <div id="google_translate_element" className="absolute top-4 right-4 z-100"></div>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/library" element={<Library />} />
        <Route path="/channel" element={<Channel />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/scholarship" element={<Scholarships />} />
        <Route path="/donor" element={<Donor />} />
        <Route path="/courses" element={<Courses category={category} setCategory={setCategory} />} />
        <Route path="/test" element={<TestimonialsCorousel />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/leaderboard" element={<LeaderBoardPage />} />
        <Route path="/student-signin" element = {<StudentRegistrationForm />} />
        <Route path="/mentor-signin" element = {<MentorRegistrationForm />} />

      </Routes>
    </div>
  );
}

const Courses = ({ category, setCategory }) => (
  <div>
    <div className='fixed top-0 left-0 w-full z-50'>
      <Navbar />
    </div>
    <CourseCategory category={category} setCategory={setCategory} />
    <CourseDisplay category={category} />
  </div>
);

export default App;
