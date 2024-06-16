import React, { useState } from 'react';

const CourseTabs = ({ courses, onSelect }) => {
  return (
    <div>
      {courses.map((course, index) => (
        <button key={index} onClick={() => onSelect(course)}>
          {course.name}
        </button>
      ))}
    </div>
  );
};

const EnrolledCourses = ({ courses }) => {
  return (
    <div>
      {courses.map((course, index) => (
        <div key={index}>{course.name}</div>
      ))}
    </div>
  );
};

const DetailedCourse = () => {
  const [courses] = useState([
    { id: 1, name: 'Course 1', details: 'Details for Course 1' },
    { id: 2, name: 'Course 2', details: 'Details for Course 2' },
    // Add more courses as needed
  ]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div>
      <CourseTabs courses={courses} onSelect={handleCourseSelect} />
      {selectedCourse && <div>{selectedCourse.details}</div>}
      <EnrolledCourses courses={courses} />
    </div>
  );
};

export default DetailedCourse;