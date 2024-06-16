

const TestimonialCard = ({ image, name, testimonial }) => {
    return (
      <div className="w-full p-6 bg-white rounded-md shadow-md">
        <img src={image} alt={name} className="w-16 h-16 rounded-full mx-auto" />
        <h2 className="mt-4 text-xl font-semibold text-center">{name}</h2>
        <p className="mt-2 text-gray-600 text-center">{testimonial}</p>
      </div>
    );
  };
  
  export default TestimonialCard;
  