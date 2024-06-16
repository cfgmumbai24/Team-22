import  { useRef } from 'react';
import announcements from './data';
import Navbar from '../Navbar';

const Announcements = () => {

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 300; 
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 300; 
    }
  };

  return (
    <div>
    <div className='fixed top-0 left-0 w-full z-50'>
    <Navbar />
    </div>
    <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <h2 className="text-3xl font-bold mb-6 text-center sm:text-left">Latest Announcements 📢</h2>
      <div className="flex items-center space-x-4 mb-4">
        <button
          className="p-4 lg:p-6 rounded-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold focus:outline-none"
          onClick={scrollLeft}
        >
          {'<'}
        </button>
        <div className="flex overflow-x-auto space-x-4 sm:space-x-6" ref={scrollRef}>
          {announcements.map((announcement, index) => (
            <a
              key={index}
              href={announcement.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-72 sm:w-80 bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={(announcement.cat === "Job")? "https://cdn.pixabay.com/photo/2019/01/19/19/22/recruitment-3942378_640.jpg" : "https://t4.ftcdn.net/jpg/01/96/87/57/360_F_196875700_4rLgO7QPC1lmtTny5VOceDY80DJasArn.jpg"}
                alt={announcement.title}
                className="h-48 sm:h-56 w-full object-cover object-center"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{announcement.title}</h3>
                <p className="text-gray-600 mb-4">{`${announcement.description.slice(0,100)}...`}</p>
                <div className="text-blue-500 hover:text-blue-600">
                  <a href={announcement.link} target="_blank" rel="noopener noreferrer">Read more</a>
                </div>
              </div>
            </a>
          ))}
        </div>
        <button
          className="p-4 lg:p-6 rounded-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold focus:outline-none"
          onClick={scrollRight}
        >
          {'>'}
        </button>
      </div>
    </div>
    </div>
  );
};

export default Announcements;