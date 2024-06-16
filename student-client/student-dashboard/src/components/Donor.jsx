import  { useRef } from 'react';
import Navbar from './Navbar';
const Donor = () => {
  const donors = [
    {
      name: 'Rajesh Kumar',
      photo: 'https://images.pexels.com/photos/7580971/pexels-photo-7580971.jpeg?auto=compress&cs=tinysrgb&w=600', 
      thankYouMessage: 'Rajesh, your generous support is deeply appreciated!',
    },
    {
      name: 'Priya Sharma',
      photo: 'https://images.pexels.com/photos/4307688/pexels-photo-4307688.jpeg?auto=compress&cs=tinysrgb&w=600', 
      thankYouMessage: 'Priya, your kindness helps us make a difference. Thank you!',
    },
    {
      name: 'Amit Patel',
      photo: 'https://images.pexels.com/photos/7580998/pexels-photo-7580998.jpeg?auto=compress&cs=tinysrgb&w=600',
      thankYouMessage: 'Amit, your contribution supports our cause immensely. Thank you!',
    },
    {
      name: 'Anjali Desai',
      photo: 'https://images.pexels.com/photos/4407625/pexels-photo-4407625.jpeg?auto=compress&cs=tinysrgb&w=600', 
      thankYouMessage: 'Anjali, your generosity helps us reach new heights. Thank you!',
    },
    {
      name: 'Sanjay Gupta',
      photo: 'https://images.pexels.com/photos/4307884/pexels-photo-4307884.jpeg?auto=compress&cs=tinysrgb&w=600', 
      thankYouMessage: 'Sanjay, your support means a lot to us. Thank you!',
    },
    {
      name: 'Divya Singh',
      photo: 'https://images.pexels.com/photos/17119069/pexels-photo-17119069/free-photo-of-woman-in-shawl-squatting-and-working-with-soil-in-bowl.jpeg?auto=compress&cs=tinysrgb&w=600', 
      thankYouMessage: 'Divya, your commitment to our mission is truly inspiring. Thank you!',
    },
    {
      name: 'Rahul Sharma',
      photo: 'https://images.pexels.com/photos/899357/pexels-photo-899357.jpeg?auto=compress&cs=tinysrgb&w=600',
      thankYouMessage: 'Rahul, your generosity brightens our journey. Thank you!',
    },
    {
      name: 'Neha Reddy',
      photo: 'https://images.pexels.com/photos/19128045/pexels-photo-19128045/free-photo-of-elderly-woman-sitting-in-shawl.jpeg?auto=compress&cs=tinysrgb&w=600', 
      thankYouMessage: 'Neha, your support helps us make a lasting impact. Thank you!',
    },
  ];

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
      <h2 className="text-3xl font-bold mb-6">Our Generous Donors</h2>
      <div className="flex items-center space-x-4 mb-4">
        <button
          className="p-4 rounded-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold focus:outline-none hidden lg:block"
          onClick={scrollLeft}
        >
          {'<'}
        </button>
        <div className="flex overflow-x-auto space-x-4 sm:space-x-6" ref={scrollRef}>
          {donors.map((donor, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-80 bg-white rounded-lg shadow-md overflow-hidden scrollbar-hide"
            >
              <img
                src={donor.photo}
                alt={donor.name}
                className="h-56 w-full object-cover object-center"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{donor.name}</h3>
                <p className="text-gray-600 mb-4">{donor.thankYouMessage}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="p-4 rounded-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold focus:outline-none hidden lg:block"
          onClick={scrollRight}
        >
          {'>'}
        </button>
      </div>
    </div>

    </div>
  );
};

export default Donor;