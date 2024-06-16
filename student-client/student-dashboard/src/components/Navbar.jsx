import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [signInDropdownOpen, setSignInDropdownOpen] = useState(false);

  const toggleSignInDropdown = () => {
    setSignInDropdownOpen(!signInDropdownOpen);
  };

  const closeSignInDropdown = () => {
    setSignInDropdownOpen(false);
  };
  return (
    <nav className="w-full flex bg-black justify-between items-center mx-auto px-8 h-20 text-white top-0 left-0 z-100">
      <div className="text-white text-3xl font-bold">

      <Link to = "/">
        <h1>EKLAVYA</h1>
        </Link>
      </div>
      <div className="space-x-4">
        <div className="group inline-block text-white">
          <button className="px-2 py-1">ACADEMICS</button>
          <div className="absolute left-0 w-screen hidden group-hover:flex bg-gray-800 justify-around items-center h-16">
            <Link to="/courses" className="block px-4 py-2 text-white text-lg font-semibold">Courses</Link>
            <div className="h-full bg-white w-px"></div> {/* Vertical divider */}
            <Link to="/leaderboard" className="block px-4 py-2 text-white text-lg font-semibold">Leaderboard</Link>

          </div>
        </div>

        

        <div className="group inline-block text-white">
          <button className="px-2 py-1">RESOURCES</button>
          <div className="absolute left-0 w-screen hidden group-hover:flex bg-gray-800 justify-around items-center h-16">
            <Link to="/library" className="block px-4 py-2 text-white text-lg font-semibold">Library</Link>
            <div className="h-full bg-white w-px"></div> {/* Vertical divider */}
            <Link to="/chatbot" className="block px-4 py-2 text-white text-lg font-semibold">Chatbot</Link>
            <div className="h-full bg-white w-px"></div> {/* Vertical divider */}
            <Link to="/donor" className="block px-4 py-2 text-white text-lg font-semibold">Donations</Link>
          </div>
        </div>

        <div className="group inline-block text-white">
          <button className="px-2 py-1">JOBS</button>
          <div className="absolute left-0 w-screen hidden group-hover:flex bg-gray-800 justify-around items-center h-16">
            <Link to="/scholarship" className="block px-4 py-2 text-white text-lg font-semibold">Scholarships</Link>
            <div className="h-full bg-white w-px"></div> {/* Vertical divider */}
            <Link to="/jobs" className="block px-4 py-2 text-white text-lg font-semibold">Jobs</Link>
            <div className="h-full bg-white w-px"></div> {/* Vertical divider */}
            <Link to="/announcements" className="block px-4 py-2 text-white text-lg font-semibold">Announcements</Link>
          </div>
        </div>

        <div className="group inline-block text-white">
        <a href='http://localhost:3000/dashboard' target='_blank'>
          <button className="px-2 py-1">MENTOR</button>
          </a>
        </div>

        
      </div>
      <div className="group inline-block text-white relative">
          <button className="px-2 py-1" onClick={toggleSignInDropdown}>Sign In</button>
          {signInDropdownOpen && (
            <div className="absolute right-2 w-[12vw] mt-8 w-90 bg-gray-800 flex-col py-2 rounded shadow-lg z-50">
              <Link to="/mentor-signin" className="block px-4 py-2 text-white text-lg font-semibold" onClick={closeSignInDropdown}>Sign In as Mentor</Link>
              <Link to="/student-signin" className="block px-4 py-2 text-white text-lg font-semibold" onClick={closeSignInDropdown}>Sign In as Student</Link>
              <button onClick={closeSignInDropdown} className="block mx-auto mt-4 px-4 py-2 text-white text-lg font-semibold bg-gray-600 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Close</button>
            </div>
          )}
        </div>
    </nav>
  );
};

export default Navbar;
