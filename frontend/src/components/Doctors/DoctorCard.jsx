import React from 'react';

const DoctorCard = ({ doctor }) => {
  const {
    name,
    specialization,
    rating,
    totalRatings,
    availableTimings,
    image,
  } = doctor;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600">{specialization}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">★</span>
          <span className="ml-1 text-gray-800">{rating}</span>
          <span className="ml-1 text-gray-600">({totalRatings} reviews)</span>
        </div>
        <p className="mt-2 text-sm text-gray-600">Available: {availableTimings}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
