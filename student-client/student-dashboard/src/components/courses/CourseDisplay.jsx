import React from 'react';
import courses from './courses';
import CourseCard from './CourseCard';

const CourseDisplay = ({ category }) => {
  return (
    <div className="transition-opacity duration-500 animate-fadeIn">
      <div className="flex justify-around flex-wrap gap-9">
        {courses.map((item) => {
          if (category === 'All' || category === item.category) {
            return (
              <div key={item.id} className='transition-opacity duration-500 animate-fadeIn'>
                <CourseCard id={item.id} name={item.name} src={item.src} category={item.category} desc={item.desc} video={item.video} />
              </div>
            );
          }
          return null; // Ensure to handle all paths in map function
        })}
      </div>
    </div>
  );
};

export default CourseDisplay;
