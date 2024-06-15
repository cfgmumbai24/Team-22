import React from 'react';
import Navbar from './Navbar';

const LandingPage = () => {
  return (
    <div>
    <div className='fixed top-0 left-0 w-full z-50'>
    <Navbar />
    </div>
    <div className="relative h-screen w-full overflow-hidden">
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="/landingVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex h-full w-full">
        <div className="text-center text-white p-8 flex mt-[50vh]">
          <h1 className="font-bold text-7xl md:text-8xl text-gray-800 dark:text-gray-200">
            EKLAVYA
          </h1>
        </div>
      </div>
    </div>
    </div>
  );
}

export default LandingPage;
