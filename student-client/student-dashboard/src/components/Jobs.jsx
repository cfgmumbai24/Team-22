import  { useRef } from 'react';
import Navbar from './Navbar';

  const Jobs = () => {
    const jobs = [
      {
        title: 'Pravara Rural Education Society - Principal',
        description: 'The Pravara Rural Education Society is looking for a Principal to lead their institution in enhancing educational opportunities for rural students. This role requires a strong background in educational leadership and a commitment to community development.',
        image: 'https://images.pexels.com/photos/4308098/pexels-photo-4308098.jpeg?auto=compress&cs=tinysrgb&w=600',
        link: 'https://www.google.com/search?q=jobs+for+rural+area+students&sourceid=chrome&ie=UTF-8&ibp=htl;jobs&htidocid=-xaL0_XxXprMMOSuAAAAAA%3D%3D&sa=X&ved=2ahUKEwjo1MG_0N6GAxUjbmwGHSRlAjMQkd0GegQIEhAB#fpstate=tldetail&htivrt=jobs&htiq=jobs+for+rural+area+students&htidocid=-xaL0_XxXprMMOSuAAAAAA%3D%3D&sxsrf=ADLYWILq3OwF1OOIyNGGMjiEVqIwGO_hWw:1718489562775',
      },
      {
        title: 'Indeed Part Time Jobs',
        description: 'Explore a variety of part-time job opportunities that cater to different skill sets and interests. Ideal for students and individuals looking to supplement their income with flexible working hours.',
        image: 'https://images.pexels.com/photos/4307866/pexels-photo-4307866.jpeg?auto=compress&cs=tinysrgb&w=600',
        link: 'https://in.indeed.com/jobs?cgtk=f28a6170-8ae3-46f0-8ee4-ed4b822b76e8&from=careerguidepromo-IN&q=part+time&vjk=823293be3a918c56',
      },
      {
        title: 'Indeed Full Time Jobs',
        description: 'Find full-time job opportunities across various industries. These positions offer stability, career growth, and benefits, making them ideal for professionals looking for long-term employment.',
        image: 'https://images.pexels.com/photos/4308043/pexels-photo-4308043.jpeg?auto=compress&cs=tinysrgb&w=600',
        link: 'https://in.indeed.com/jobs?cgtk=f28a6170-8ae3-46f0-8ee4-ed4b822b76e8&from=careerguidepromo-IN&q=full+time&vjk=408b6608c45c2294',
      },
      {
        title: 'Indeed Remote Jobs',
        description: 'Discover remote job opportunities that allow you to work from anywhere. Perfect for those seeking flexibility and the ability to balance work with personal commitments.',
        image: 'https://images.pexels.com/photos/64609/pexels-photo-64609.jpeg?auto=compress&cs=tinysrgb&w=600',
        link: 'https://in.indeed.com/jobs?cgtk=f28a6170-8ae3-46f0-8ee4-ed4b822b76e8&from=careerguidepromo-IN&q=remote+jobs&vjk=a964e0d7f4863e8b',
      },
      {
        title: 'Rural Vacancies',
        description: 'Browse job openings specifically targeted towards rural areas. These positions are designed to support the growth and development of rural communities.',
        image: 'https://images.pexels.com/photos/763934/pexels-photo-763934.jpeg?auto=compress&cs=tinysrgb&w=600', 
        link: 'https://in.indeed.com/q-rural-school-jobs.html?vjk=587df5c672ec3513',
      },
      {
        title: 'Rural School Jobs',
        description: 'Explore teaching and administrative job opportunities in rural schools. These roles are crucial for improving education and fostering development in rural communities.',
        image: 'https://images.pexels.com/photos/140945/pexels-photo-140945.jpeg?auto=compress&cs=tinysrgb&w=600',
        link: 'https://in.indeed.com/q-rural-school-jobs.html',
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
        <h2 className="text-3xl font-bold mb-6 text-center sm:text-left">Featured Jobs</h2>
        <div className="flex items-center space-x-4 mb-4">
          <button
            className="p-4 lg:p-6 rounded-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold focus:outline-none"
            onClick={scrollLeft}
          >
            {'<'}
          </button>
          <div className="flex overflow-x-auto space-x-4 sm:space-x-6" ref={scrollRef}>
            {jobs.map((jobs, index) => (
              <a
                key={index}
                href={jobs.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-72 sm:w-80 bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={jobs.image}
                  alt={jobs.title}
                  className="h-48 sm:h-56 w-full object-cover object-center"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{jobs.title}</h3>
                  <p className="text-gray-600 mb-4">{jobs.description}</p>
                  <div className="text-blue-500 hover:text-blue-600">
                    <a href={jobs.link} target="_blank" rel="noopener noreferrer">Read more</a>
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
  
  
export default Jobs;