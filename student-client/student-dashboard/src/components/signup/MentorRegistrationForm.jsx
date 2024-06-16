import React, { useState } from 'react';

const MentorRegistrationForm = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    age: '',
    phone: '',
    address: '',
    district: '',
    state: '',
    aadhar: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};

    if (!formData.fname) errors.name = "Name is required";
    if (!formData.lname) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    if (formData.age && (isNaN(formData.age) || formData.age <= 0)) {
      errors.age = "Age must be a positive number";
    }
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone number must be 10 digits";
    }
    if (!formData.password) errors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log("Form submitted successfully:", formData);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-orange-950 ">Mentor Registration</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: 'First Name', name: 'name', type: 'text', required: true },
          { label: 'Last Name', name: 'name', type: 'text', required: true },
          { label: 'Email', name: 'email', type: 'email', required: true },
          { label: 'Age', name: 'age', type: 'number' },
          { label: 'Phone Number', name: 'phone', type: 'text' },
          { label: 'Address', name: 'address', type: 'text' },
          { label: 'District', name: 'district', type: 'text' },
          { label: 'State', name: 'state', type: 'text' },
          { label: 'Aadhar Card', name: 'aadhar', type: 'text' },
        ].map((field, index) => (
          <div key={index}>
            <label className="block text-sm font-medium text-gray-700">
              {field.label}
              {field.required && <span className="text-red-500">*</span>}
            </label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required={field.required}
            />
            {errors[field.name] && <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>}
          </div>
        ))}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Confirm Password<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-yellow-500 text-orange-950 border-2 border-orange-950 font-semibold rounded-md shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-400 "
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default MentorRegistrationForm;
