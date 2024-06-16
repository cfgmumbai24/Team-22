import  { useRef } from 'react';
import Navbar from './Navbar';

const Scholarships = () => {
  const scholarships = [
    {
      title: 'buddy4study',
      description: 'PARD INDIA (Pragathi Association for Rural Development) has launched the “V-Kid Scholarship Program (VKSP)” in order to enhance the educational prospects of underprivileged students residing in the rural areas.',
      image: 'https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'https://www.buddy4study.com/article/scholarships-for-rural-students#:~=Scholarships%20for%20Rural%20Students%20%E2%80%93%20V,residing%20in%20the%20rural%20areas.',
    },
    {
      title: 'rural-scholarships',
      description: 'For some people, pursuing higher education can be the best way to invest in the future. A degree can help you find a career you love with a higher salary, benefits, a work-life balance, and more. However, getting a degree is an investment and an expensive one at that.',
      image: 'https://images.pexels.com/photos/1739842/pexels-photo-1739842.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'https://study.com/resources/rural-scholarships-college-guide.html',
    },
    {
      title: 'youth-programs',
      description: 'The foundation annually awards scholarships to an exceptional group of rural students for their first year of college or vocational school. All applicants require partnership with an NTCA—The Rural Broadband Association member company to be eligible.FRS has awarded over $1 million in scholarships since its inception.',
      image: 'https://images.pexels.com/photos/3381571/pexels-photo-3381571.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'https://www.frs.org/programs/youth-programs/scholarships',
    },
    {
      title: 'Collegeraptor',
      description: 'If you’re going to college in the city, you can still apply for these great opportunities. One of these scholarships awards $5,000 to four students who will be majoring in a STEM or medical field. There are also two $1,500 scholarships available, one $5,000 scholarship, and one $7,000.',
      image: 'https://images.pexels.com/photos/5909870/pexels-photo-5909870.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'https://www.collegeraptor.com/paying-for-college/articles/scholarships/scholarships-students-live-rural-areas/',
    },
    {
      title: 'mykaleidoscope',
      description: 'FRS annually awards scholarships to rural students for their first year of 2-year or 4-year college, or vocational school. All applicants require sponsorship by an NTCA—The Rural Broadband Association member company to be eligible. FRS has awarded over $1 million in scholarships since its inception.',
      image: 'https://images.pexels.com/photos/3231359/pexels-photo-3231359.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'https://apply.mykaleidoscope.com/scholarships/FRSScholarships2024',
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
      <h2 className="text-3xl font-bold mb-6 text-center sm:text-left">Featured Scholarships</h2>
      <div className="flex items-center space-x-4 mb-4">
        <button
          className="p-4 lg:p-6 rounded-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold focus:outline-none"
          onClick={scrollLeft}
        >
          {'<'}
        </button>
        <div className="flex overflow-x-auto space-x-4 sm:space-x-6" ref={scrollRef}>
          {scholarships.map((scholarship, index) => (
            <a
              key={index}
              href={scholarship.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-72 sm:w-80 bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={scholarship.image}
                alt={scholarship.title}
                className="h-48 sm:h-56 w-full object-cover object-center"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{scholarship.title}</h3>
                <p className="text-gray-600 mb-4">{scholarship.description}</p>
                <div className="text-blue-500 hover:text-blue-600">
                  <a href={scholarship.link} target="_blank" rel="noopener noreferrer">Read more</a>
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

export default Scholarships;