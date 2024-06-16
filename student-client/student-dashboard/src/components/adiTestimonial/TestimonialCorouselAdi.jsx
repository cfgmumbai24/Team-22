import React, { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard'; // Import the TestimonialCard component
import testimonials from './testdata';

const TestimonialCorouselAdi = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="min-w-full">
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCorouselAdi;
