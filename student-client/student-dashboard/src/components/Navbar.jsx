import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
            <Link to="/subroute1" className="block px-4 py-2 text-white text-lg font-semibold">Courses</Link>
            <div className="h-full bg-white w-px"></div> {/* Vertical divider */}
            <Link to="/subroute2" className="block px-4 py-2 text-white text-lg font-semibold">Leaderboard</Link>
            <div className="h-full bg-white w-px"></div> {/* Vertical divider */}
            <Link to="/subroute3" className="block px-4 py-2 text-white text-lg font-semibold">Goals</Link>
          </div>
        </div>

        <div className="group inline-block text-white">
          <button className="px-2 py-1">MENTOR</button>
          <div className="absolute left-0 w-screen hidden group-hover:flex bg-gray-800 justify-around items-center h-16">
            <Link to="/subroute1" className="block px-4 py-2 text-white text-lg font-semibold">Channel</Link>
            <div className="h-full bg-white w-px"></div> {/* Vertical divider */}
            <Link to="/subroute2" className="block px-4 py-2 text-white text-lg font-semibold">Interactions</Link>
          </div>
        </div>

        <div className="group inline-block text-white">
          <button className="px-2 py-1">RESOURCES</button>
          <div className="absolute left-0 w-screen hidden group-hover:flex bg-gray-800 justify-around items-center h-16">
            <Link to="/library" className="block px-4 py-2 text-white text-lg font-semibold">Library</Link>
            <div className="h-full bg-white w-px"></div> {/* Vertical divider */}
            <Link to="/chatbot" className="block px-4 py-2 text-white text-lg font-semibold">Chatbot</Link>

          </div>
        </div>

        <div className="group inline-block text-white">
          <button className="px-2 py-1">JOBS</button>
          <div className="absolute left-0 w-screen hidden group-hover:flex bg-gray-800 justify-around items-center h-16">
            <Link to="/subroute1" className="block px-4 py-2 text-white text-lg font-semibold">Subheading 1</Link>
            <div className="h-full bg-white w-px"></div> {/* Vertical divider */}
            <Link to="/subroute2" className="block px-4 py-2 text-white text-lg font-semibold">Subheading 2</Link>
            <div className="h-full bg-white w-px"></div> {/* Vertical divider */}
            <Link to="/subroute3" className="block px-4 py-2 text-white text-lg font-semibold">Subheading 3</Link>
          </div>
        </div>

        <div className="group inline-block text-white">
          <button className="px-2 py-1">COMMUNITY</button>
          <div className="absolute left-0 w-screen hidden group-hover:flex bg-gray-800 justify-around items-center h-16">
            <Link to="/subroute4" className="block px-4 py-2 text-white text-lg font-semibold">Subheading 4</Link>
            <div className="h-full bg-white w-px"></div> {/* Vertical divider */}
            <Link to="/subroute5" className="block px-4 py-2 text-white text-lg font-semibold">Subheading 5</Link>
            <div className="h-full bg-white w-px"></div> {/* Vertical divider */}
            <Link to="/subroute6" className="block px-4 py-2 text-white text-lg font-semibold">Subheading 6</Link>
          </div>
        </div>
        {/* Add more headings as needed */}
      </div>
      <div className="text-white">
        <Link to="/signin" className="px-2 py-1">Sign In</Link>
      </div>
    </nav>
  );
};

export default Navbar;
